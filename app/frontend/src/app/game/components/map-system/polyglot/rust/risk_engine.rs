// risk_engine.rs
// Rust module to calculate the "National Risk Level" using complex state variables.

pub struct RiskStats {
    pub economy: f64,
    pub military: f64,
    pub stability: f64,
    pub diplomatic_tension: f64,
}

pub fn calculate_risk_level(stats: &RiskStats) -> f64 {
    // A weighted formula to determine if a country is in a 'Danger Zone'
    let weight_econ = 0.2;
    let weight_mili = 0.3;
    let weight_stab = 0.4;
    let weight_tens = 0.1;

    let risk = (100.0 - stats.economy) * weight_econ +
               (100.0 - stats.military) * weight_mili +
               (100.0 - stats.stability) * weight_stab +
               (stats.diplomatic_tension) * weight_tens;
    
    risk.clamp(0.0, 100.0)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_risk_calc() {
        let stats = RiskStats {
            economy: 80.0,
            military: 70.0,
            stability: 90.0,
            diplomatic_tension: 20.0,
        };
        let risk = calculate_risk_level(&stats);
        assert!(risk < 50.0);
    }
}
