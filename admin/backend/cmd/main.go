package main

import (
	"fmt"
	"net/http"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "admin backend success",
		})
	})
	fmt.Println("Admin Backend running on :8080")
	r.Run(":8080")
}
