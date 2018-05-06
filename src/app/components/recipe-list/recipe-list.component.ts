import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[];
  recipe_in_progress: Recipe;
  constructor(private router: Router) {
    this.recipe_in_progress = Recipe.createBlank();
    this.recipes = [
      Recipe.recipeFromJson({
        'id': 1,
        'title': 'Banan Bread',
        'description': 'This is my first banana bread recipe! my mother taughtme how to make this one warm summer',
        'feed_this_many': 40,
        'prepration_time': 50,
        'ingredients': [
          { 'ingredient': 'plane flour', 'measure': '285g' },
          { 'ingredient': 'butter, softened', 'measure': '210g + abit extra for lin' },
          { 'ingredient': 'eggs, Large', 'measure': '2' },
          { 'ingredient': 'custer sugar', 'measure': '285g' },
          { 'ingredient': 'chocklet chips', 'measure': '1/2 cup' },
          { 'ingredient': 'salt', 'measure': '1/2 tsup' },
          { 'ingredient': 'plane flour', 'measure': '285g' },
          { 'ingredient': 'plane flour', 'measure': '285g' },
          { 'ingredient': 'plane flour', 'measure': '285g' },
          { 'ingredient': 'plane flour', 'measure': '285g' }
        ],
        'instructions': [
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'Sift the flour,bicarbonate of soad and salt into a large mixing bowl', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null }
        ],
        'cover-Photo': null,
        'keywords': [
          'bana bread', 'toffu', 'human', 'spicy', 'chinesr'
        ]
      }),
      Recipe.recipeFromJson({
        'id': 2,
        'title': 'Banan Bread',
        'description': 'This is my first banana bread recipe! my mother taughtme how to make this one warm summer',
        'feed_this_many': 4,
        'prepration_time': 60,
        'ingredients': [
          { 'ingredient': 'plane flour', 'measure': '285g' },
          { 'ingredient': 'butter, softened', 'measure': '210g + abit extra for lin' },
          { 'ingredient': 'eggs, Large', 'measure': '2' },
          { 'ingredient': 'custer sugar', 'measure': '285g' },
          { 'ingredient': 'chocklet chips', 'measure': '1/2 cup' },
          { 'ingredient': 'salt', 'measure': '1/2 tsup' },
          { 'ingredient': 'plane flour', 'measure': '285g' },
          { 'ingredient': 'plane flour', 'measure': '285g' },
          { 'ingredient': 'plane flour', 'measure': '285g' },
          { 'ingredient': 'plane flour', 'measure': '285g' }
        ],
        'instructions': [
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'Sift the flour,bicarbonate of soad and salt into a large mixing bowl', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null }
        ],
        'cover-Photo': null,
        'keywords': [
          'bana bread', 'toffu', 'human', 'spicy', 'chinesr'
        ]
      }),
      Recipe.recipeFromJson({
        'id': 3,
        'title': 'Banan Bread',
        'description': 'This is my first banana bread recipe! my mother taughtme how to make this one warm summer',
        'feed_this_many': 4,
        'prepration_time': 60,
        'ingredients': [
          { 'ingredient': 'plane flour', 'measure': '285g' },
          { 'ingredient': 'butter, softened', 'measure': '210g + abit extra for lin' },
          { 'ingredient': 'eggs, Large', 'measure': '2' },
          { 'ingredient': 'custer sugar', 'measure': '285g' },
          { 'ingredient': 'chocklet chips', 'measure': '1/2 cup' },
          { 'ingredient': 'salt', 'measure': '1/2 tsup' },
          { 'ingredient': 'plane flour', 'measure': '285g' },
          { 'ingredient': 'plane flour', 'measure': '285g' },
          { 'ingredient': 'plane flour', 'measure': '285g' },
          { 'ingredient': 'plane flour', 'measure': '285g' }
        ],
        'instructions': [
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'Sift the flour,bicarbonate of soad and salt into a large mixing bowl', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null },
          { 'instruction': 'preheat the oven tp 180c', 'photo': null }
        ],
        'cover-Photo': null,
        'keywords': [
          'bana bread', 'toffu', 'human', 'spicy', 'chinesr'
        ]
      })
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
  public userClickedOnRecipe(recipe_id): void {
    console.log(recipe_id);
    this.router.navigateByUrl('/recipe/' + recipe_id);
  }
  public addRecipeForm() {
    this.router.navigateByUrl('/addnewrecipe');
  }
}
