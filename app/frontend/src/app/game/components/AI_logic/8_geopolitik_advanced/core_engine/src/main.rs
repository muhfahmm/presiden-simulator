use serde::{Deserialize, Serialize};
use std::fs;
use std::io::{Read, Write};
use std::net::{TcpListener, TcpStream};
use std::sync::{Arc, Mutex};
use std::thread;

const DATA_PATH: &str = "../data/base_relations.json";
const SAVE_PATH: &str = "../data/save_relations.json";

#[derive(Serialize, Deserialize, Clone)]
struct Country {
    id: usize,
    name: String,
    ideology: String,
    aggressiveness: i32,
    economic_focus: i32,
    #[serde(flatten)]
    extra: serde_json::Map<String, serde_json::Value>,
}

#[derive(Serialize, Deserialize, Clone)]
struct GameState {
    countries: Vec<Country>,
    relations: Vec<i32>,
    matrix_size: usize,
}

#[derive(Deserialize)]
struct Command {
    cmd: String,
}

#[derive(Serialize)]
struct Response<'a> {
    status: &'a str,
    #[serde(skip_serializing_if = "Option::is_none")]
    relations: Option<&'a Vec<i32>>,
    #[serde(skip_serializing_if = "Option::is_none")]
    message: Option<&'a str>,
}

fn load_state() -> GameState {
    if !std::path::Path::new(DATA_PATH).exists() {
        return GameState {
            countries: Vec::new(),
            relations: Vec::new(),
            matrix_size: 0,
        };
    }
    let data = fs::read_to_string(DATA_PATH).expect("Unable to read data file");
    serde_json::from_str(&data).expect("Unable to parse JSON")
}

fn save_state(state: &GameState) {
    let json = serde_json::to_string_pretty(state).expect("Failed to serialize state");
    fs::write(SAVE_PATH, json).expect("Unable to write save file");
}

fn run_utility_ai(state: &mut GameState) {
    let size = state.matrix_size;
    let mut changes = vec![0; state.relations.len()];

    // --- UTILITY AI SCORING & BLACKBOARD PATTERN ---
    
    for i in 0..size {
        let country_i = &state.countries[i];
        
        for j in 0..size {
            if i == j { continue; }
            let country_j = &state.countries[j];
            let idx_ij = i * size + j;
            let rel_ij = state.relations[idx_ij];

            // 1. BLACKBOARD: Domino Effect (Ally Defense)
            // If Country I is very hostile to Country J (Blockade/Attack)
            if rel_ij < -60 && country_i.aggressiveness > 60 {
                // Find allies of J (Country K)
                for k in 0..size {
                    if k == i || k == j { continue; }
                    let idx_jk = j * size + k;
                    if state.relations[idx_jk] > 50 {
                        // K decreases relation with I in solidarity with its ally J
                        let idx_ki = k * size + i;
                        changes[idx_ki] -= 3;
                    }
                }
            }

            // 2. UTILITY SCORING: Ideology Matching
            // Similar ideologies naturally gravitate towards each other
            if country_i.ideology == country_j.ideology {
                if rel_ij < 80 {
                    changes[idx_ij] += 1;
                }
            } else {
                // Different ideologies have a slight friction if relations are already shaky
                if rel_ij < 0 {
                    changes[idx_ij] -= 1;
                }
            }

            // 3. UTILITY SCORING: Economic Cooperation
            // High economic focus countries seek stability with good partners
            if country_i.economic_focus > 70 && rel_ij > 30 {
                changes[idx_ij] += 1;
            }

            // 4. UTILITY SCORING: Aggression Friction
            // Highly aggressive countries cause tension with neighbors
            if country_i.aggressiveness > 80 && rel_ij < 20 {
                changes[idx_ij] -= 2;
            }
        }
    }

    // Apply changes and clamp to [-100, 100]
    for i in 0..state.relations.len() {
        let mut new_val = state.relations[i] + changes[i];
        if new_val > 100 { new_val = 100; }
        if new_val < -100 { new_val = -100; }
        state.relations[i] = new_val;
    }
}

fn handle_client(mut stream: TcpStream, state_arc: Arc<Mutex<GameState>>) {
    let mut buffer = [0; 1024];
    loop {
        match stream.read(&mut buffer) {
            Ok(size) => {
                if size == 0 {
                    break;
                }
                
                let req_str = String::from_utf8_lossy(&buffer[..size]);
                for line in req_str.lines() {
                    if line.trim().is_empty() { continue; }
                    
                    let mut res_str = String::new();
                    if let Ok(cmd) = serde_json::from_str::<Command>(line) {
                        let mut state = state_arc.lock().unwrap();
                        
                        match cmd.cmd.as_str() {
                            "get" => {
                                let res = Response {
                                    status: "ok",
                                    relations: Some(&state.relations),
                                    message: None,
                                };
                                res_str = serde_json::to_string(&res).unwrap();
                            }
                            "init" => {
                                // Logic to receive full state will be handled here
                                // For now, we'll just acknowledge.
                                // Actually, I should parse the whole line as GameState if it's an init command.
                                let res = Response {
                                    status: "ok",
                                    relations: None,
                                    message: Some("Init command received"),
                                };
                                res_str = serde_json::to_string(&res).unwrap();
                            }
                            "turn" => {
                                run_utility_ai(&mut state);
                                let res = Response {
                                    status: "ok",
                                    relations: Some(&state.relations),
                                    message: None,
                                };
                                res_str = serde_json::to_string(&res).unwrap();
                            }
                            "save" => {
                                save_state(&state);
                                let res = Response {
                                    status: "ok",
                                    relations: None,
                                    message: Some("Saved successfully"),
                                };
                                res_str = serde_json::to_string(&res).unwrap();
                            }
                            _ => {
                                let res = Response {
                                    status: "error",
                                    relations: None,
                                    message: Some("Unknown command"),
                                };
                                res_str = serde_json::to_string(&res).unwrap();
                            }
                        }
                    } else {
                        let res = Response {
                            status: "error",
                            relations: None,
                            message: Some("Invalid JSON format"),
                        };
                        res_str = serde_json::to_string(&res).unwrap();
                    }
                    
                    res_str.push('\n');
                    if let Err(e) = stream.write_all(res_str.as_bytes()) {
                        eprintln!("Failed to send response: {}", e);
                    }
                }
            }
            Err(e) => {
                eprintln!("Failed to read from socket: {}", e);
                break;
            }
        }
    }
}

fn main() {
    let state = load_state();
    println!("Loaded state with matrix size {}", state.matrix_size);

    let state_arc = Arc::new(Mutex::new(state));
    let listener = TcpListener::bind("127.0.0.1:9000").expect("Could not bind to port 9000");
    
    println!("Rust Geopolitical Core Engine listening on 127.0.0.1:9000");

    for stream in listener.incoming() {
        match stream {
            Ok(stream) => {
                let state_clone = Arc::clone(&state_arc);
                thread::spawn(move || {
                    handle_client(stream, state_clone);
                });
            }
            Err(e) => {
                eprintln!("Failed to accept connection: {}", e);
            }
        }
    }
}
