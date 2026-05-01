use std::io::{self, BufRead};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
struct NationState {
    name: String,
    population: f64,
    budget: f64,
    happiness: f64,
    stability: f64,
    daily_income: f64,
}

#[derive(Serialize, Deserialize, Debug)]
struct SimulationBatch {
    nations: Vec<NationState>,
}

fn main() {
    println!("Rust Simulation Engine: STANDBY (Ready for 100 Nations)");
    println!("HEARTBEAT_READY"); // Signal to Go that Time Master is active
    
    let stdin = io::stdin();
    for line in stdin.lock().lines() {
        if let Ok(line_str) = line {
            if let Ok(mut batch) = serde_json::from_str::<SimulationBatch>(&line_str) {
                // Process each nation in the batch (High Performance Rust Loop)
                for nation in &mut batch.nations {
                    nation.population *= 1.00002;
                    nation.budget += nation.daily_income * 0.95;
                    
                    if nation.happiness < 50.0 {
                        nation.happiness += 0.05;
                    } else {
                        nation.happiness -= 0.02;
                    }
                }
                
                if let Ok(output) = serde_json::to_string(&batch) {
                    println!("{}", output);
                }
            }
        }
    }
}
