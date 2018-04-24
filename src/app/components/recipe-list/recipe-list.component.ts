import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[];
  recipe_in_progress: Recipe;
  constructor() {
   this.recipe_in_progress = Recipe.createBlank();
    this.recipes = [
      new Recipe('bananas bread',
      'This is my faveriotr banana recipe! My mother tought me to prepaire this recipe in summer sesion',
      2, 5,
      null,
      null,
      'image'),
      new Recipe('banana bread',
      'This is my faveriotr banana recipe! My mother tought me to prepaire this recipe in summer sesion',
      2, 5,
      null,
      null,
      'image'),
      new Recipe('cup cake',
      'This is my fevarate recipe for the birthady and it have reach test',
      2, 5, null, null, null)
    ];
  }
  public createRecipe() {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }
  public zoomInOnRecipe(recipe) {
    console.log(JSON.stringify(recipe, null, 2));
  }
}
