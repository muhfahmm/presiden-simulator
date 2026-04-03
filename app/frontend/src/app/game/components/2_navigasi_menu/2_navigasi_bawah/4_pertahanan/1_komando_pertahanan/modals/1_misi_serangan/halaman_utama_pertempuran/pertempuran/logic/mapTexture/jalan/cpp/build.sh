#!/bin/bash
# Build script untuk C++ road generator

mkdir -p build
cd build
cmake -DCMAKE_BUILD_TYPE=Release ..
cmake --build .
cp road_generator ../
cd ..
echo "Build complete: road_generator"
