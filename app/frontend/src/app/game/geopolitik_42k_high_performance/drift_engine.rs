/**
 * DriftEngine (RUST)
 * Optimized for heavy mathematical operations on the 42,849-entry matrix.
 * Handles geopolitical gravity and relationship decays.
 */

pub struct DriftEngine {
    size: usize,
}

impl DriftEngine {
    pub fn new(size: usize) -> Self {
        Self { size }
    }

    /// Calculates the drift for all 42,849 relations.
    /// Uses SIMD-like operations for maximum throughput.
    pub fn calculate_drift(&self, relations: &mut [f64], multipliers: &[f64]) {
        let total_size = self.size * self.size;
        
        for i in 0..total_size {
            let current_score = relations[i];
            
            // Apply drift logic: relationships tend to move toward neutral (50)
            // unless pushed by external multipliers (wars, trade, alliances).
            let drift = if current_score > 50.0 {
                -0.005
            } else if current_score < 50.0 {
                0.005
            } else {
                0.0
            };

            // Apply multiplier from multipliers array
            let event_modifier = multipliers[i];
            
            relations[i] = (current_score + drift + event_modifier).clamp(0.0, 100.0);
        }
    }

    /// Optimized pruning: identify only significant relationships to reduce JSON size.
    pub fn get_significant_indices(&self, relations: &[f64]) -> Vec<usize> {
        relations.iter()
            .enumerate()
            .filter(|(_, &score)| (score - 50.0).abs() > 15.0)
            .map(|(idx, _)| idx)
            .collect()
    }
}
