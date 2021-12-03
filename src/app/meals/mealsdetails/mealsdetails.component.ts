import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mealsdetails',
  templateUrl: './mealsdetails.component.html',
  styleUrls: ['./mealsdetails.component.css']
})
export class MealsdetailsComponent implements OnInit {

  constructor(public RecipesService:RecipesService, private route: ActivatedRoute,public router:Router) { }

  SearchedMeal:any=[];
  show:boolean=false;
  Ingrediantslist:any=['1','2','3','4','5','6','7','8','9','10']

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getMealsDetails(params['id']);
   });
  }
  
  getMealsDetails(searchValue:any){
    this.RecipesService.getMealsDetailsbyId(searchValue).subscribe((responceData: any) => {
      this.SearchedMeal = responceData.meals[0];
     }, 
     (error) => {
       this.navigateToPagenotFoundpage();
    });
  }

  navigateToPagenotFoundpage(){
    this.router.navigate(['./meals/404'])
  }

}
