import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { Identifiers } from '@angular/compiler';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { NotFoundComponent } from '../../component/not-found/not-found.component';
import { RecipeService } from '../../services/recipe.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 recipeonloadboolen: boolean;
 colorchanges: any;
 loadEror: boolean;
 errorText: string;
 recipe: Recipe;
  constructor(private route: ActivatedRoute,
  private location: Location, private router: Router, private recipe_service: RecipeService) {
    this.recipeonloadboolen = false;
    this.loadEror = false;
    this.colorchanges = {
      'dark': false
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
    const recipe_id = parseInt(params.get('recipe_id'), 10);
    this.recipe_service.getRecipeById(recipe_id)
    .then((recipe) => {
      this.recipe = recipe;
      this.recipeonloadboolen = true;
    })
    .catch((err) => {
   const body = JSON.parse(err._body);
   this.loadEror = true;
   this.errorText = body.message;
    });
    });
  }
  public goback() {
    this.location.back();
  }
  public colorChange() {
    const newvalu = !this.colorchanges['dark'];
    this.colorchanges = {'dark': newvalu};
  }
}
