import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealsRoutingModule } from './meals-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MealsdetailsComponent } from './mealsdetails/mealsdetails.component';


@NgModule({
  declarations: [
    RecipesComponent,
    DashboardComponent,
    MealsdetailsComponent
  ],
  imports: [
    CommonModule,
    MealsRoutingModule
  ]
})
export class MealsModule { }
