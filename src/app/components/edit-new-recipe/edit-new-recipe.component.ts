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
  form_disable: boolean;
  constructor(private locale: Location, private recipe_services: RecipeService, private router: Router) {
    this.recipe_in_progress = Recipe.createBlank();
    this.form_disable = true;
  }
  addIngredientPassed(): void {
    console.log(this.recipe_in_progress.ingredients);
    if (!this.recipe_in_progress.ingredients) {
      this.recipe_in_progress.ingredients = [{ ingredient: null, measure: null }];
    } else {
      this.recipe_in_progress.ingredients.push({ ingredient: null, measure: null });
    }
  }
  addInstructionPassed(): void {
    if (!this.recipe_in_progress.instructions) {
      this.recipe_in_progress.instructions = [{ instruction: null, photo: null }];
    } else {
      this.recipe_in_progress.instructions.push({ instruction: null, photo: null });
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
  form_validation(event) {
    this.form_disable = true;
    // console.log(event.target.value); get the current value form the textbox events
    // console.log(this.recipe_in_progress.title);
    if (!this.recipe_in_progress.title || this.recipe_in_progress.title.length < 1)  {
      return; // return true to function so it won't go to next block until next event call
    }
    if (!this.recipe_in_progress.description) {
      return;
    }
    const prep_time = parseInt('' + this.recipe_in_progress.preparation_time, 10);
    if (!prep_time || prep_time < 1 || isNaN(prep_time)) {
      return;
    }
    const feeds_many = parseInt('' + this.recipe_in_progress.feeds_this_many, 10);
    if (!feeds_many || feeds_many < 1 || isNaN(feeds_many)) {
      return;
    }
    for (const recep of this.recipe_in_progress.ingredients) {
     if (!recep.ingredient || recep.ingredient.length < 1 ) {
      return;
     }
     if (!recep.measure || recep.measure.length < 1 ) {
      return;
     }
    }
    for (const recepinst of this.recipe_in_progress.instructions) {
      if (!recepinst.instruction || recepinst.instruction.length < 1 ) {
       return;
      }
     }
    this.form_disable = false;
  }
}
