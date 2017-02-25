'use strict';

function addIngredient(recipe,k,v){
recipe[k]=v;
return recipe;
}

function removeIngredient(recipe,k){
delete recipe[k];
return recipe;
}

function updateIngredient(recipe,k,v){
  recipe[k]=v;
  return recipe;
}
function readRecipe(recipe){
  for(var k in recipe)
    console.log("this recipe calls for " + recipe[k]+ " of " + k);
}
