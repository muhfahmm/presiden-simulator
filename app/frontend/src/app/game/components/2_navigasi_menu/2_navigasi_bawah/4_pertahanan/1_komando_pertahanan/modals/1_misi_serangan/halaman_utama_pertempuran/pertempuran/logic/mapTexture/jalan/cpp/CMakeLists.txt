cmake_minimum_required(VERSION 3.10)
project(RoadGenerator)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(road_generator road_generator.cpp)

# Optimization flags
if(CMAKE_BUILD_TYPE STREQUAL "Release")
    target_compile_options(road_generator PRIVATE -O3 -march=native)
endif()
