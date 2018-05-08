import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { Http } from '@angular/http';

const RECIPE_SERVER = 'http://localhost:8080';
@Injectable()
export class RecipeService {
  constructor(private http: Http) {
  }
  // return asyncronous array to getallRecipe and the return type is recipe array object
  // http will use Get PUT POST DELETE
  // put meance adding new thing
  // POST means modify data
  getAllRecipes(): Promise<Recipe[]> {
    return this.http
      .get(RECIPE_SERVER + '/v1/recipes.json')
      .toPromise()
      .then(response => response.json().data as Recipe[]);
  }
  getRecipeById(recipe_id: number): Promise<Recipe> {
    return this.http
      // .get(RECIPE_SERVER + '/v1/recipes/' + recipe_id + '.json')
      .get(RECIPE_SERVER + `/v1/recipes/${recipe_id}.json`)
      .toPromise()
      .then(response => response.json().data as Recipe);
  }
  addNewRecipe(recipe: Recipe): Promise<Recipe> {
    // this.recipes.unshift(recipe);
    // using PUT fuction to write into service
    return this.http
    .put(RECIPE_SERVER + '/v1/recipes.json', recipe)
    .toPromise()
    .then(response => response.json().data as Recipe);
  }
}

