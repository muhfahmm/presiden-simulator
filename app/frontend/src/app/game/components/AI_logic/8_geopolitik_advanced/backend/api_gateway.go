package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"net"
	"net/http"
	"time"
)

const RUST_ADDR = "127.0.0.1:9000"
const PORT = ":9090"

// Request command to Rust
type RustCommand struct {
	Cmd string `json:"cmd"`
}

// Send command to Rust and read response
func sendToRust(cmd string) ([]byte, error) {
	conn, err := net.DialTimeout("tcp", RUST_ADDR, 2*time.Second)
	if err != nil {
		return nil, fmt.Errorf("failed to connect to Rust core: %v", err)
	}
	defer conn.Close()

	req := RustCommand{Cmd: cmd}
	reqData, _ := json.Marshal(req)
	reqData = append(reqData, '\n')

	_, err = conn.Write(reqData)
	if err != nil {
		return nil, fmt.Errorf("failed to write to Rust core: %v", err)
	}

	reader := bufio.NewReader(conn)
	res, err := reader.ReadBytes('\n')
	if err != nil {
		return nil, fmt.Errorf("failed to read from Rust core: %v", err)
	}

	return res, nil
}

// Handlers
func handleGetRelations(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	if r.Method != http.MethodGet {
		http.Error(w, `{"error": "Method not allowed"}`, http.StatusMethodNotAllowed)
		return
	}

	res, err := sendToRust("get")
	if err != nil {
		http.Error(w, fmt.Sprintf(`{"error": "%s"}`, err.Error()), http.StatusInternalServerError)
		return
	}
	w.Write(res)
}

func handleRunTurn(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	if r.Method != http.MethodPost && r.Method != http.MethodOptions {
		http.Error(w, `{"error": "Method not allowed"}`, http.StatusMethodNotAllowed)
		return
	}

	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}

	res, err := sendToRust("turn")
	if err != nil {
		http.Error(w, fmt.Sprintf(`{"error": "%s"}`, err.Error()), http.StatusInternalServerError)
		return
	}
	w.Write(res)
}

func handleSave(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	if r.Method != http.MethodPost && r.Method != http.MethodOptions {
		http.Error(w, `{"error": "Method not allowed"}`, http.StatusMethodNotAllowed)
		return
	}

	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}

	res, err := sendToRust("save")
	if err != nil {
		http.Error(w, fmt.Sprintf(`{"error": "%s"}`, err.Error()), http.StatusInternalServerError)
		return
	}
	w.Write(res)
}

func main() {
	http.HandleFunc("/api/relations", handleGetRelations)
	http.HandleFunc("/api/turn", handleRunTurn)
	http.HandleFunc("/api/save", handleSave)

	fmt.Println("Go API Gateway running on http://127.0.0.1" + PORT)
	if err := http.ListenAndServe(PORT, nil); err != nil {
		fmt.Printf("Error starting server: %s\n", err)
	}
}
