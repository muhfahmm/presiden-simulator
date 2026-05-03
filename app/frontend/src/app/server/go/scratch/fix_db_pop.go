package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

func main() {
	psqlInfo := "host=localhost port=5432 user=postgres password=fahiimsql123_ dbname=db_presiden_simulator sslmode=disable"
	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to database")

	// Update game_sessions (multiply current_population by 1000 if it's too low)
	res, err := db.Exec("UPDATE game_sessions SET current_population = current_population * 1000 WHERE current_population < 1000000")
	if err != nil {
		log.Fatal(err)
	}
	count, _ := res.RowsAffected()
	fmt.Printf("Updated %d game_sessions\n", count)

	// Update session_npc_states
	res, err = db.Exec("UPDATE session_npc_states SET population = population * 1000 WHERE population < 1000000")
	if err != nil {
		log.Fatal(err)
	}
	count, _ = res.RowsAffected()
	fmt.Printf("Updated %d session_npc_states\n", count)
}
