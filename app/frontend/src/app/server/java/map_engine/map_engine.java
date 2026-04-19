package map_engine;

import java.util.HashMap;
import java.util.Map;

/**
 * map_engine.java
 * High-performance Naming Index for Polyglot Map System.
 */
public class map_engine {
    private static final Map<String, String> geoJsonToIndo = new HashMap<>();

    static {
        geoJsonToIndo.put("United Kingdom", "inggris");
        geoJsonToIndo.put("United States of America", "amerika serikat");
        geoJsonToIndo.put("The Bahamas", "bahama");
        geoJsonToIndo.put("Democratic Republic of the Congo", "republik demokratik kongo");
        geoJsonToIndo.put("East Timor", "timor-leste");
    }

    public static String normalize(String input) {
        if (input == null) return "unknown";
        String normalized = input.trim().toLowerCase();
        return geoJsonToIndo.getOrDefault(input, normalized);
    }

    public static void main(String[] args) {
        System.out.println("[JAVA] Map Engine (Naming Service) Online.");
    }
}
