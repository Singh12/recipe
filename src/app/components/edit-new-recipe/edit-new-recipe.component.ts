import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Recipe } from '../../model/recipe';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, ValidatorFn, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  recipe_in_progress: Recipe;
  form_disable: boolean;
  constructor(private locale: Location, private recipe_services: RecipeService, private router: Router) {
    this.recipe_in_progress = Recipe.createBlank();
    this.form_disable = true;
    this.formValidationfn();
  }
  addIngredientPassed(): void {
    console.log(this.recipe_in_progress.ingredients);
    if (!this.recipe_in_progress.ingredients) {
      this.recipe_in_progress.ingredients = [{ ingredient: null, measure: null }];
      this.formValidationfn();
    } else {
      this.recipe_in_progress.ingredients.push({ ingredient: null, measure: null });
      this.formValidationfn();
    }
  }
  addInstructionPassed(): void {
    if (!this.recipe_in_progress.instructions) {
      this.recipe_in_progress.instructions = [{ instruction: null, photo: null }];
      this.formValidationfn();
    } else {
      this.recipe_in_progress.instructions.push({ instruction: null, photo: null });
      this.formValidationfn();
    }
  }
  deleteInstructions(i): void {
    // console.log(i);
    this.recipe_in_progress.instructions.splice(i, 1);
    this.formValidationfn();
  }
  deleteIngredient(i): void {
    this.recipe_in_progress.ingredients.splice(i, 1);
    this.formValidationfn();
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
  // reactiv form implementation
  formValidationfn(): void {
    const fg = {
      'title': new FormControl(this.recipe_in_progress.title, [Validators.required, customValidation]),
      'description': new FormControl(this.recipe_in_progress.description, [Validators.required]),
      'preparation_time': new FormControl(this.recipe_in_progress.preparation_time,
        [Validators.required, Validators.max(20), Validators.min(2)]),
      'feeds_this_many': new FormControl(this.recipe_in_progress.feeds_this_many,
        [Validators.required, Validators.max(20), Validators.min(2)]),
    };
    for (let i = 0; i < this.recipe_in_progress.ingredients.length; i++) {
      fg['ingredient_' + i] = new FormControl(this.recipe_in_progress.ingredients[i].ingredient, [Validators.required]);
      fg['measure_' + i] = new FormControl(this.recipe_in_progress.ingredients[i].measure, [Validators.required]);
    }
    for (let i = 0; i < this.recipe_in_progress.instructions.length; i++) {
      fg['instruction_' + i] = new FormControl(this.recipe_in_progress.instructions[i].instruction, [Validators.required]);
        }
    this.recipeForm = new FormGroup(fg);
  }
  /*
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
  */
}

export function customValidation(control: AbstractControl): ValidatorFn {
  // console.log(control.value);
  if (control.value.toLowerCase().indexOf('rajnish') !== -1) {
    return control.value;
  }
  return null;
 // console.log('control.value');
 /* return (control: AbstractControl): { [key: string]: any} => {
    console.log(control.value);
    if (control.value.toLowerCase().indexOf('rajnish') !== -1 ||
    control.value.toLowerCase().indexOf('singh') !== -1) {
      return {'customValidation': { value: control.value } };
    }
    return null;
  };*/
  // if (!control.value.startsWith('https') || !control.value.includes('.io')) {
   // return { validUrl: true };
  // }

}
