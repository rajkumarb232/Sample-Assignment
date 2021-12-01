import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) {}
  
  SearchMeals(name:any){
     const url ="https://www.themealdb.com/api/json/v1/1/search.php?s="+name;
    return this.http.get(url);
  }
  getRandomMeal() {
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    return this.http.get(url);
  }
  getMealsDetailsbyId(id: any) {
    const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
    return this.http.get(url);
  }
  getAllCategories() {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    return this.http.get(url);
  }
  getSubategoriesById(id: any) {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + id;
    return this.http.get(url);
  }
}
