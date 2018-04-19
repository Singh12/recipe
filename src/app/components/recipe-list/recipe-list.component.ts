import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[];
  constructor() {
    this.recipes = [
      new Recipe('bananas bread',
      'This is my faveriotr banana recipe! My mother tought me to prepaire this recipe in summer sesion',
      null,
      null,
      'image'),
      new Recipe('banana bread',
      'This is my faveriotr banana recipe! My mother tought me to prepaire this recipe in summer sesion',
      null,
      null,
      'image'),
      new Recipe('cup cake',
      'This is my fevarate recipe for the birthady and it have reach test',
     null, null, null)
    ];
  }
}
