import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';

@Injectable()
export class RecipeService {
  recipes: Recipe[];
  constructor() {
    this.recipes = [
      Recipe.recipeFromJson({
        'id': 1,
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
  // return asyncronous array to getallRecipe and the return type is recipe array object
  getAllRecipes(): Promise<Recipe[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.recipes), 4000);
    });
  }
  getRecipeById(recipe_id: number): Promise<Recipe> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        for (const recipe of this.recipes) {
          if (recipe.id === recipe_id) {
            resolve(recipe);
            return;
          }
        }
        reject(Error('No recipe exists with that id'));
      }, 2000);
    });
  }
}
