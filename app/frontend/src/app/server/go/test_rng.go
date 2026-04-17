package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	Rng := rand.New(rand.NewSource(time.Now().UnixNano()))
	for i := 0; i < 3; i++ {
		fmt.Println("Test 1:", Rng.Intn(11)+5)
		fmt.Println("Test 2:", Rng.Intn(11)+5)
		fmt.Println("Test 3:", Rng.Intn(11)+5)
		fmt.Println("---")
	}
}
