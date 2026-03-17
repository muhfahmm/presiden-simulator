package main

import (
	"fmt"
	"net/http"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// r.Use(cors.Default()) // Add CORS if needed later for frontend-desktop

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "user game backend success",
		})
	})

	fmt.Println("User Game Backend running on :8081")
	r.Run(":8081") // Admin is on 8080, User on 8081
}
