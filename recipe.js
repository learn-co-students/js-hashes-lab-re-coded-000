'use strict';
function addIngredient(recipe, ingredient, amount) {
	recipe[ingredient] = amount;
  return recipe;
}

function removeIngredient(recipe, ingredient) {
	delete recipe[ingredient];
  return recipe;
}

function updateIngredient(recipe, ingredient, amount) {
	recipe[ingredient] = amount;
  return recipe;
}

function readRecipe(recipe) {
	Object.keys(recipe).forEach(function (key) { 
    var value = recipe[key]
 console.log("this recipe calls for " + value + " of " + key);
});

}