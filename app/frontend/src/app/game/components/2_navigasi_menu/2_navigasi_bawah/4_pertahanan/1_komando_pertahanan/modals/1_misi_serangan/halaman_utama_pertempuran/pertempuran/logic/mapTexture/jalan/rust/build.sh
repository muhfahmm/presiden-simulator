#!/bin/bash
# Build script untuk Rust road generator

cargo build --release
echo "Build complete: target/release/road_generator"
