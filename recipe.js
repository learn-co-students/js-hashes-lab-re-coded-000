'use strict';

function addIngredient(recipe,ing,q) {
    recipe[ing]=q;
    return recipe;
}
function removeIngredient(recipe,ing,q) {
  delete recipe[ing];
  return recipe;
}
function updateIngredient(recipe,ing,q) {
   recipe[ing]=q;
   return recipe;
}
function readRecipe(recipe) {
  for(var ingredient in recipe)
  console.log("this recipe calls for "+recipe[ingredient]+" of "+ingredient);
}
