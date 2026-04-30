/**
 * ConsensusEngine (RUST)
 * Optimized for simulating UN voting outcomes and calculating global consensus.
 * Handles the logic of 207 nations deciding on complex resolutions.
 */

pub struct ConsensusEngine {
    pub quorum_threshold: f32,
}

#[derive(Debug, Clone)]
pub struct VoteTally {
    pub yes: u32,
    pub no: u32,
    pub abstain: u32,
}

impl ConsensusEngine {
    pub fn new() -> Self {
        Self { quorum_threshold: 0.66 } // Two-thirds majority
    }

    /**
     * Rapidly calculates the expected outcome of a resolution based on 
     * current diplomatic relations and global tension.
     */
    pub fn simulate_vote(&self, country_biases: &[f32]) -> VoteTally {
        let mut tally = VoteTally { yes: 0, no: 0, abstain: 0 };
        
        for &bias in country_biases {
            if bias > 0.7 {
                tally.yes += 1;
            } else if bias < 0.3 {
                tally.no += 1;
            } else {
                tally.abstain += 1;
            }
        }
        tally
    }

    /**
     * Determines if a resolution passes based on PBB rules.
     */
    pub fn check_resolution_status(&self, tally: &VoteTally) -> bool {
        let total_active = tally.yes + tally.no;
        if total_active == 0 { return false; }
        
        (tally.yes as f32 / total_active as f32) >= self.quorum_threshold
    }
}
