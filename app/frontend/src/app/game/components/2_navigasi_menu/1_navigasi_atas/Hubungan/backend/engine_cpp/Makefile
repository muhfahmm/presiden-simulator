CC=g++
CFLAGS=-O3 -shared -fPIC
TARGET=drift_engine.so

# For Windows, change .so to .dll
ifeq ($(OS),Windows_NT)
	TARGET=drift_engine.dll
endif

all: $(TARGET)

$(TARGET): drift_engine.cpp
	$(CC) $(CFLAGS) -o $(TARGET) drift_engine.cpp
