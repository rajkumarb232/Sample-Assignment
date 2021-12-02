import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  RandomMeal: any = [];
  SearchedMeal: any = [];
  categoriesList: any = [];
  Searchresult: boolean = false;
  searchInput = " ";

  constructor(public RecipesService: RecipesService, public router: Router) { }

  ngOnInit(): void {
    this.getRandomMeal();
    this.getCategories();
  }

  getRandomMeal() {
    this.RecipesService.getRandomMeal().subscribe((responceData: any) => {
      this.RandomMeal = responceData.meals[0];
    });
  }

  searchwithCategoryName(searchValue: any) {
    this.Searchresult = true;
    this.RecipesService.SearchMeals(searchValue).subscribe((responceData: any) => {
      this.responsehandler(responceData)
      this.mapcategoriesListData();
    });
  }

  responsehandler(responceData: any) {
    this.categoriesList = responceData.meals;
  }

//  this function is for maping meals images into categoriesList array
  mapcategoriesListData() {
    this.categoriesList.map(function (ele: any) {
      return ele.strCategoryThumb = ele.strMealThumb;
    });
  }

  getCategories() {
    this.Searchresult = false;
    this.RecipesService.getAllCategories().subscribe((responceData: any) => {
      this.categoriesList = responceData.categories;
    });
  }
  ClickOnCategory(category: any) { 
    this.router.navigate(['./meals/Resipes', category]);
  }

  ClickOnBanner(mealsId: any) {
    this.router.navigate(['./meals/Mealsdetails', mealsId]);
  }
}