import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Recipe } from '../../model/recipe';
@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {
  recipe_in_progress: Recipe;
  constructor(private locale: Location) {
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
  ngOnInit() {
  }
  public goback() {
    this.locale.back();
  }
}
