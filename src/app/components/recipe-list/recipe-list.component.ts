import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../model/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeloadboolean: boolean;
  loadEror: boolean;
  errorText: string;
  recipes: Recipe[];
  recipe_in_progress: Recipe;
  constructor(private router: Router, private recipe_service: RecipeService) {
    this.recipe_in_progress = Recipe.createBlank();
    this.loadEror = false;
  }
  ngOnInit() {
   // use the recipe service to get recipe
   this.recipe_service.getAllRecipes()
   .then((recipes) => {
     this.recipes = recipes;
     this.recipeloadboolean = true;
   })
   .catch((err) => {
    const body = JSON.parse(err._body);
    this.loadEror = true;
    this.errorText = body.message;
   });
  }
  public createRecipe() {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }
  public zoomInOnRecipe(recipe) {
    console.log(JSON.stringify(recipe, null, 2));
  }
  public userClickedOnRecipe(recipe_id): void {
    console.log(recipe_id);
    this.router.navigateByUrl('/recipe/' + recipe_id);
  }
}
