import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RecipesService } from 'src/app/services/recipes.service';
import { MealsdetailsComponent } from './mealsdetails.component';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';


describe('MealsdetailsComponent', () => {
  let component: MealsdetailsComponent;
  let fixture: ComponentFixture<MealsdetailsComponent>;
  let recipesService: RecipesService;
 
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule],
      declarations: [ MealsdetailsComponent ],
      providers: [RecipesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsdetailsComponent);
    component = fixture.componentInstance;
    recipesService = TestBed.inject(RecipesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('It should call getMealsDetails function when ngOnInit loads', () => {
    spyOn(component, 'getMealsDetails').and.callThrough();
    component.getMealsDetails('searchvalue');
    expect(component.getMealsDetails).toHaveBeenCalledWith('searchvalue');
  });

  it('It should handle getMealsDetails function error response',()=>{
    spyOn(recipesService,'getMealsDetailsbyId').and.returnValue(throwError('error'));
    expect(component.getMealsDetails).toThrowError();
});

  it('It should call navigateToPagenotFoundpage function when getMealsDetails fails', waitForAsync(inject([Router], (router:any) => {
    spyOn(router, 'navigate').and.stub();
    component.navigateToPagenotFoundpage();
    expect(router.navigate).toHaveBeenCalledWith(['./meals/404']);
  })));



})
