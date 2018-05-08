import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Recipe } from '../../model/recipe';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {
  recipe_in_progress: Recipe;
  constructor(private locale: Location, private recipe_services: RecipeService, private router: Router) {
    this.recipe_in_progress =  Recipe.createBlank();
  }
  addIngredientPassed(): void {
    console.log(this.recipe_in_progress.ingredients);
    if (!this.recipe_in_progress.ingredients) {
      this.recipe_in_progress.ingredients = [{ingredient: null, measure: null}];
    } else {
      this.recipe_in_progress.ingredients.push({ingredient: null, measure: null});
    }
  }
  addInstructionPassed(): void {
    if (!this.recipe_in_progress.instructions) {
      this.recipe_in_progress.instructions = [{instruction: null, photo: null}];
    } else {
      this.recipe_in_progress.instructions.push({instruction: null, photo: null});
    }
  }
  deleteInstructions(i): void {
    console.log(i);
    this.recipe_in_progress.instructions.splice(i, 1);
  }
  deleteIngredient(i): void {
    this.recipe_in_progress.ingredients.splice(i, 1);
  }
  createRecipe() {
    this.recipe_services.addNewRecipe(this.recipe_in_progress)
    .then((recipe) => {
      this.router.navigateByUrl('/recipe/' + recipe.id);
    });
  }
  ngOnInit() {
  }
  public goback() {
    this.locale.back();
  }
}
