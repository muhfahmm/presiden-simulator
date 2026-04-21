
import { countries } from "../app/frontend/src/app/pilih_negara/data/negara/benua/index";
import { calculateBudgetBreakdown } from "../app/frontend/src/app/game/data/economy/BudgetDeltaLogic";

const country = countries.find(c => c.name_en === "Indonesia");
if (country) {
  const b1 = calculateBudgetBreakdown(country, {});
  console.log("Delta with {}: ", b1.dailyDelta);
  
  // Simulation of how it might be different in game
  // If we had some building deltas...
  const b2 = calculateBudgetBreakdown(country, { "1_jalan_tol": 1 }); 
  console.log("Delta with 1 Road: ", b2.dailyDelta);
}
