import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { Identifiers } from '@angular/compiler';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 recipe: Recipe;
 recipes: Recipe[];
  constructor(private route: ActivatedRoute,
  private location: Location) {
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

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
    this.recipe = this.findRecipeById(parseInt(params.get('recipe_id'), 10));
    });
  }
  public goback() {
    this.location.back();
  }
  findRecipeById(id: number): Recipe {
    for (const recipe of this.recipes) {
      if (recipe.id === id) {
        return recipe;
      }
    }
    console.log('test');
    return null;
  }
}
