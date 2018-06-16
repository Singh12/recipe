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
      .then(response => response.json().data as Recipe[])
      .catch(this.handleError);
  }
  getRecipeById(recipe_id: number): Promise<Recipe> {
    return this.http
      // .get(RECIPE_SERVER + '/v1/recipes/' + recipe_id + '.json')
      .get(RECIPE_SERVER + `/v1/recipes/${recipe_id}.json`)
      .toPromise()
      .then(response => response.json().data as Recipe)
      .catch(this.handleError);
  }
  addNewRecipe(recipe: Recipe, files: {}): Promise<Recipe> {
    // this.recipes.unshift(recipe);
    // using PUT fuction to write into service
    return this.http
    .put(RECIPE_SERVER + '/v1/recipes.json', recipe)
    .toPromise()
    .then((response) => {
      const final_recipe: Recipe = response.json().data as Recipe;
      // we need form data to upload images into server
      const formdata: FormData = new FormData;
      if (files['cover_photo']) {
        const file: File = files['cover_photo'];
        formdata.append('cover_photo', file, file.name);
      }
      if (files['preparation_photos']) {
        for (let i = 0; i < files['preparation_photos'].length ; i++) {
          if (files['preparation_photos'][i]) {
            const file: File = files['preparation_photos'][i];
            formdata.append('preparation_photos_' + i, file, file.name);
          }
        }
      }
      return this.http.post(RECIPE_SERVER + `/v1/recipes/${final_recipe.id}/images`, formdata)
      .toPromise()
      .then(image_response => final_recipe)
      .catch(this.handleError);
    })
    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}

