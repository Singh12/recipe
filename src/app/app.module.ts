import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeSummeryComponent } from './components/recipe-summery/recipe-summery.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { EditNewRecipeComponent } from './components/edit-new-recipe/edit-new-recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeSummeryComponent,
    RecipeDetailsComponent,
    EditNewRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'recipe',
        component: RecipeListComponent
      },
      {
        path: 'addnewrecipe',
        component: EditNewRecipeComponent
      },
      {
        path: 'recipe/:recipe_id',
        component: RecipeDetailsComponent
      },
      {
        path: '',
        redirectTo: 'recipe',
        pathMatch: 'full'
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
