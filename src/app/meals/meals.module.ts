import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealsRoutingModule } from './meals-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MealsdetailsComponent } from './mealsdetails/mealsdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    RecipesComponent,
    DashboardComponent,
    MealsdetailsComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    MealsRoutingModule
  ]
})
export class MealsModule { }
