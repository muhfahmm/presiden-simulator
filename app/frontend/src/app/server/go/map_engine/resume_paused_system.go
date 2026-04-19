package map_engine

import (
	"encoding/json"
	"os/exec"
	"io"
)

/**
 * resume_paused_system.go
 * Orchestrates the transition between active simulation and paused state.
 */

// TriggerResumePausedSystem invokes polyglot workers during state transitions
func TriggerResumePausedSystem(isPaused bool, fullState interface{}) (map[string]interface{}, error) {
	if isPaused {
		// Prepare situation report via Python
		return runPythonReport(fullState)
	}
	// Logic for Resume (Geometric prediction in C++, etc.)
	return nil, nil
}

func runPythonReport(state interface{}) (map[string]interface{}, error) {
	cmd := exec.Command("python", "src/app/server/python/map_engine/resume_paused_system.py")
	stdin, _ := cmd.StdinPipe()
	
	jsonBytes, _ := json.Marshal(state)
	go func() {
		defer stdin.Close()
		io.WriteString(stdin, string(jsonBytes))
	}()

	out, err := cmd.Output()
	if err != nil {
		return nil, err
	}

	var result map[string]interface{}
	json.Unmarshal(out, &result)
	return result, nil
}
