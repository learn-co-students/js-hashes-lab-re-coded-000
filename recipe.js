'use strict';

function addIngredient(recipe, name, amount) {
  recipe[name] = amount;
  return recipe;
}

function removeIngredient(recipe, name) {
  delete recipe[name];
  return recipe;
}

function updateIngredient(recipe, name, amount) {
  for (var key in recipe){
    if (key == name){ var foundkey = key}
  }
  if (foundkey) { recipe[foundkey] = amount }
  return recipe
}

function readRecipe(recipe) {
  for (var key in recipe) {
    console.log("this recipe calls for "+ recipe[key] + " of "+ key)
  }
}
