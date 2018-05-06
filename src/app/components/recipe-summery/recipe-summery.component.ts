import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-summery',
  templateUrl: './recipe-summery.component.html',
  styleUrls: ['./recipe-summery.component.css']
})
export class RecipeSummeryComponent {
  @Input()
  // create recipe member variable of type recipe
  recipe: Recipe;
  @Output()
  userClicked: EventEmitter<number> = new EventEmitter();
  constructor() { }
  userClick() {
    this.userClicked.emit(this.recipe.id);
  }
}
