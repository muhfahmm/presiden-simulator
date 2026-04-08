"""
Test script untuk AI Voting Service
Run: python test_service.py
"""

import requests
import json
from typing import Dict, Any

BASE_URL = "http://localhost:8000"

def test_health_check():
    """Test health endpoint"""
    print("\n[TEST 1] Health Check")
    print("-" * 50)
    
    try:
        response = requests.get(f"{BASE_URL}/health")
        print(f"Status: {response.status_code}")
        print(f"Response: {response.json()}")
        assert response.status_code == 200
        print("✅ PASSED")
        return True
    except Exception as e:
        print(f"❌ FAILED: {e}")
        return False

def test_single_vote():
    """Test single vote calculation"""
    print("\n[TEST 2] Single Vote Calculation")
    print("-" * 50)
    
    payload = {
        "resolution": {
            "type": "resolution",
            "name": "Larangan Perang (Anti-War)",
            "description": "Kesepakatan kolektif untuk menghentikan agresi militer",
            "proposer_country": "Indonesia",
            "target_country": None,
            "duration": "1 Tahun",
            "global_tension": 0.6
        },
        "voting_country": {
            "name": "Jepang",
            "continent": "Asia",
            "gdp": 5000000000000,
            "military_power": 75,
            "diplomatic_standing": 80,
            "political_ideology": "western",
            "stability": 0.9,
            "economic_dependency": {}
        },
        "all_countries": [],
        "player_reputation": 0.7
    }
    
    try:
        response = requests.post(
            f"{BASE_URL}/vote/single",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        print(f"Status: {response.status_code}")
        result = response.json()
        print(f"Vote: {result['vote']}")
        print(f"Reasoning: {result['reasoning']}")
        print(f"Confidence: {result['confidence']:.2f}")
        print(f"Tension Impact: {result['tension_impact']:.2f}")
        
        assert response.status_code == 200
        assert result['vote'] in ['agree', 'abstain', 'disagree']
        print("✅ PASSED")
        return True
    except Exception as e:
        print(f"❌ FAILED: {e}")
        return False

def test_batch_vote():
    """Test batch vote calculation"""
    print("\n[TEST 3] Batch Vote Calculation")
    print("-" * 50)
    
    countries = [
        {
            "name": "Amerika Serikat",
            "continent": "Amerika Utara",
            "gdp": 25000000000000,
            "military_power": 95,
            "diplomatic_standing": 70,
            "political_ideology": "western",
            "stability": 0.85,
            "economic_dependency": {}
        },
        {
            "name": "China",
            "continent": "Asia",
            "gdp": 18000000000000,
            "military_power": 90,
            "diplomatic_standing": 60,
            "political_ideology": "eastern",
            "stability": 0.8,
            "economic_dependency": {}
        },
        {
            "name": "Indonesia",
            "continent": "Asia",
            "gdp": 1300000000000,
            "military_power": 55,
            "diplomatic_standing": 75,
            "political_ideology": "non_aligned",
            "stability": 0.75,
            "economic_dependency": {}
        },
        {
            "name": "Swiss",
            "continent": "Europe",
            "gdp": 800000000000,
            "military_power": 40,
            "diplomatic_standing": 90,
            "political_ideology": "neutral",
            "stability": 0.95,
            "economic_dependency": {}
        }
    ]
    
    payload = {
        "resolution": {
            "type": "resolution",
            "name": "Larangan Perang (Anti-War)",
            "description": "Kesepakatan kolektif untuk menghentikan agresi militer",
            "proposer_country": "Indonesia",
            "target_country": None,
            "duration": "1 Tahun",
            "global_tension": 0.7
        },
        "voting_countries": countries,
        "player_country": "Indonesia",
        "player_reputation": 0.7
    }
    
    try:
        response = requests.post(
            f"{BASE_URL}/vote/batch",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        print(f"Status: {response.status_code}")
        result = response.json()
        
        print(f"\nSummary:")
        print(f"  Agree: {result['summary']['agree']}")
        print(f"  Abstain: {result['summary']['abstain']}")
        print(f"  Disagree: {result['summary']['disagree']}")
        
        print(f"\nDetailed Votes:")
        for country_name, vote_data in result['votes'].items():
            print(f"  {country_name}: {vote_data['vote']} (confidence: {vote_data['confidence']:.2f})")
        
        assert response.status_code == 200
        assert len(result['votes']) == len(countries)
        print("\n✅ PASSED")
        return True
    except Exception as e:
        print(f"❌ FAILED: {e}")
        return False

def test_sanction_scenario():
    """Test sanksi ekonomi scenario"""
    print("\n[TEST 4] Sanksi Ekonomi Scenario")
    print("-" * 50)
    
    countries = [
        {
            "name": "Jerman",
            "continent": "Europe",
            "gdp": 4000000000000,
            "military_power": 70,
            "diplomatic_standing": 80,
            "political_ideology": "western",
            "stability": 0.9,
            "economic_dependency": {"Rusia": 0.4}  # High dependency
        },
        {
            "name": "Polandia",
            "continent": "Europe",
            "gdp": 700000000000,
            "military_power": 60,
            "diplomatic_standing": 75,
            "political_ideology": "western",
            "stability": 0.85,
            "economic_dependency": {"Rusia": 0.2}  # Medium dependency
        },
        {
            "name": "India",
            "continent": "Asia",
            "gdp": 3500000000000,
            "military_power": 80,
            "diplomatic_standing": 70,
            "political_ideology": "non_aligned",
            "stability": 0.75,
            "economic_dependency": {"Rusia": 0.3}
        }
    ]
    
    payload = {
        "resolution": {
            "type": "sanction",
            "name": "Sanksi Ekonomi terhadap Rusia",
            "description": "Pembatasan perdagangan dan keuangan",
            "proposer_country": "Amerika Serikat",
            "target_country": "Rusia",
            "duration": "6 Bulan",
            "global_tension": 0.85
        },
        "voting_countries": countries,
        "player_country": "Amerika Serikat",
        "player_reputation": 0.65
    }
    
    try:
        response = requests.post(
            f"{BASE_URL}/vote/batch",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        print(f"Status: {response.status_code}")
        result = response.json()
        
        print(f"\nVoting Results:")
        for country_name, vote_data in result['votes'].items():
            dependency = next(c['economic_dependency'].get('Rusia', 0) for c in countries if c['name'] == country_name)
            print(f"  {country_name}:")
            print(f"    Vote: {vote_data['vote']}")
            print(f"    Economic Dependency: {dependency:.1%}")
            print(f"    Reasoning: {vote_data['reasoning']}")
        
        # Expect: Countries with high dependency more likely to disagree/abstain
        assert response.status_code == 200
        print("\n✅ PASSED")
        return True
    except Exception as e:
        print(f"❌ FAILED: {e}")
        return False

def run_all_tests():
    """Run all tests"""
    print("=" * 50)
    print("  AI VOTING SERVICE TEST SUITE")
    print("=" * 50)
    
    results = []
    
    # Check if service is running
    try:
        requests.get(f"{BASE_URL}/health", timeout=2)
    except:
        print("\n❌ ERROR: AI Service tidak berjalan!")
        print("Jalankan service terlebih dahulu: python main.py")
        return
    
    results.append(("Health Check", test_health_check()))
    results.append(("Single Vote", test_single_vote()))
    results.append(("Batch Vote", test_batch_vote()))
    results.append(("Sanction Scenario", test_sanction_scenario()))
    
    # Summary
    print("\n" + "=" * 50)
    print("  TEST SUMMARY")
    print("=" * 50)
    
    passed = sum(1 for _, result in results if result)
    total = len(results)
    
    for test_name, result in results:
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name}: {status}")
    
    print(f"\nTotal: {passed}/{total} tests passed")
    
    if passed == total:
        print("\n🎉 All tests passed!")
    else:
        print(f"\n⚠️  {total - passed} test(s) failed")

if __name__ == "__main__":
    run_all_tests()
