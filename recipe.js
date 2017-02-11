'use strict';
function addIngredient(recipe,ingredient,amounts)
{
  recipe[ingredient]=amounts;
  return recipe;
}
function removeIngredient(recipe,ingredient)
{
	delete recipe[ingredient];
	return recipe;
}
function updateIngredient(recipe,ingredient,amounts)
{
	recipe[ingredient]=amounts;
	return recipe;
}
function readRecipe(recipe)
{
	for(var ingredient in recipe)
	{
		console.log("this recipe calls for "+recipe[ingredient]+" of "+ingredient);
	}
}