CC=g++
CFLAGS=-O3 -shared -fPIC
TARGET=flow_engine.so

# For Windows, change .so to .dll
ifeq ($(OS),Windows_NT)
	TARGET=flow_engine.dll
endif

all: $(TARGET)

$(TARGET): flow_engine.cpp
	$(CC) $(CFLAGS) -o $(TARGET) flow_engine.cpp
