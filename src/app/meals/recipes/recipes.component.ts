import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  subCategoriesList: any = [];
  selectedcategory: any = [];

  constructor(public RecipesService: RecipesService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
     this.route.params.subscribe(params => {
       this.selectedcategory=params['id'];
      this.getSubCategories(params['id']);
    });
  }

  getSubCategories(id: any) {
    this.RecipesService.getSubategoriesById(id).subscribe((responceData: any) => {
      this.subCategoriesList = responceData.meals;
    });
  }

  ClickOnsubcategory(mealsId: any) {
    this.router.navigate(['./meals/Mealsdetails',mealsId]);
  }

}
