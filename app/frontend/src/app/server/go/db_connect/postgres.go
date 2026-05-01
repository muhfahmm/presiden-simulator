package db_connect

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/lib/pq"
)

// DB is the global database connection handle
var DB *sql.DB

// ConnectPostgres initializes the connection to PostgreSQL
func ConnectPostgres() (*sql.DB, error) {
	host := os.Getenv("DB_HOST")
	if host == "" { host = "localhost" }
	
	port := os.Getenv("DB_PORT")
	if port == "" { port = "5432" }
	
	user := os.Getenv("DB_USER")
	if user == "" { user = "postgres" }
	
	password := os.Getenv("DB_PASSWORD")
	if password == "" { password = "fahiimsql123_" } // User password
	
	dbname := "db_presiden_simulator"

	psqlInfo := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		return nil, fmt.Errorf("error opening database: %v", err)
	}

	err = db.Ping()
	if err != nil {
		return nil, fmt.Errorf("error connecting to database: %v", err)
	}

	fmt.Printf("[DB] Successfully connected to %s\n", dbname)
	DB = db
	return db, nil
}

// CloseDB closes the database connection
func CloseDB() {
	if DB != nil {
		DB.Close()
		fmt.Println("[DB] Connection closed.")
	}
}
