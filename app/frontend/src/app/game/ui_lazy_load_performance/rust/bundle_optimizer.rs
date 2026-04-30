/**
 * BundleOptimizer (RUST)
 * Analyzes dependency graphs and calculates optimal chunk splitting.
 * Ensures that shared logic is not duplicated across lazy-loaded modals.
 */

use std::collections::{HashMap, HashSet};

pub struct BundleOptimizer {
    dependencies: HashMap<String, Vec<String>>,
}

impl BundleOptimizer {
    pub fn new() -> Self {
        Self {
            dependencies: HashMap::new(),
        }
    }

    pub fn add_dependency(&mut self, component: &str, dep: &str) {
        self.dependencies.entry(component.to_string())
            .or_insert_with(Vec::new)
            .push(dep.to_string());
    }

    /**
     * Identifies "Common Chunks" that are shared by multiple modals.
     * These should be split into a separate JS file for better caching.
     */
    pub fn find_common_chunks(&self) -> HashMap<String, usize> {
        let mut counts = HashMap::new();
        
        for deps in self.dependencies.values() {
            let mut seen = HashSet::new();
            for d in deps {
                if seen.insert(d) {
                    *counts.entry(d.clone()).or_insert(0) += 1;
                }
            }
        }
        
        // Filter chunks used by more than 1 component
        counts.into_iter()
            .filter(|(_, count)| *count > 1)
            .collect()
    }

    /**
     * Estimates the "Initial Load Impact" of a component.
     */
    pub fn estimate_load_impact(&self, component: &str) -> f64 {
        match self.dependencies.get(component) {
            Some(deps) => deps.len() as f64 * 1.5, // 1.5KB per dependency (hypothetical)
            None => 0.0,
        }
    }
}
