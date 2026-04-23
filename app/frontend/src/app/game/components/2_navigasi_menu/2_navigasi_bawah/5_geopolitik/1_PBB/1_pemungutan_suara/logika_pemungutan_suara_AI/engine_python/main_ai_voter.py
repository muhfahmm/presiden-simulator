import json
import sys
import os
from VoterLogic import VoterLogic

def run_voting_simulation(resolution_json):
    # Load resolution
    resolution = json.loads(resolution_json)
    
    # Load country data
    data_path = os.path.join(os.path.dirname(__file__), "../data_simulator/mock_countries_207.json")
    with open(data_path, 'r') as f:
        countries = json.load(f)
        
    results = {
        "setuju": [],
        "tolak": [],
        "abstain": []
    }
    
    for country_data in countries:
        voter = VoterLogic(country_data)
        vote = voter.decide_vote(resolution)
        
        if vote == "Setuju":
            results["setuju"].append(country_data['name'])
        elif vote == "Tolak":
            results["tolak"].append(country_data['name'])
        else:
            results["abstain"].append(country_data['name'])
            
    # Calculate counts
    summary = {
        "id": resolution['id'],
        "title": resolution['title'],
        "total_setuju": len(results["setuju"]),
        "total_tolak": len(results["tolak"]),
        "total_abstain": len(results["abstain"]),
        "details": results
    }
    
    return summary

if __name__ == "__main__":
    if len(sys.argv) > 1:
        res_json = sys.argv[1]
    else:
        # Default mock resolution for testing
        res_json = json.dumps({
            "id": 123,
            "title": "Global Carbon Tax",
            "theme": "Environment",
            "proposer": "Player"
        })
        
    summary = run_voting_simulation(res_json)
    print(json.dumps(summary, indent=2))
