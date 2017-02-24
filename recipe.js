'use strict';
function addIngredient(recipe_object,ingredient_name,amounts) {
	recipe_object[ingredient_name]=amounts;
	return recipe_object;
}

function removeIngredient(recipe,ingredient) {
	delete recipe[ingredient];
	return recipe;
}

function updateIngredient(recipe,ingredient,amount) {
	recipe[ingredient]=amount;
	return recipe;
}

function readRecipe(recipe) {
	for(var key in recipe){
	console.log("this recipe calls for " + recipe[key] +" of " + key);
	}
}