import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeSummeryComponent } from './components/recipe-summery/recipe-summery.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { EditNewRecipeComponent } from './components/edit-new-recipe/edit-new-recipe.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

import { RecipeService } from './services/recipe.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SweeringPipe } from './misc/sweering.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeSummeryComponent,
    RecipeDetailsComponent,
    EditNewRecipeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SweeringPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'recipe',
        component: RecipeListComponent
      },
      {
        path: '404',
        component: NotFoundComponent
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
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
