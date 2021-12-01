import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MealsdetailsComponent } from './mealsdetails/mealsdetails.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
{ path: 'Resipes/:id', component: RecipesComponent },
{ path: 'Dashboard', component: DashboardComponent },
{ path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
{path:'Mealsdetails/:id',component:MealsdetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealsRoutingModule { }
