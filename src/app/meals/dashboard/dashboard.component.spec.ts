import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { throwError } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let recipesService: RecipesService;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule],
      declarations: [ DashboardComponent ],
      providers: [RecipesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    recipesService = TestBed.inject(RecipesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('ClickOnBanner function should call when clicked on Banner', waitForAsync(inject([Router], (router:any) => {
    spyOn(router, 'navigate').and.stub();
    component.ClickOnBanner('id');
    expect(router.navigate).toHaveBeenCalledWith(['./meals/Mealsdetails','id']);
  })));

  it('It  should call searchwithCategoryName function when click on search button', () => {
    spyOn(component, 'searchwithCategoryName').and.callThrough();
    component.searchwithCategoryName('ratatouille');
    expect(component.searchwithCategoryName).toHaveBeenCalled();
    spyOn(component, 'mapcategoriesListData').and.callThrough();
    component.mapcategoriesListData();
    expect(component.mapcategoriesListData).toHaveBeenCalled();
  });


  it('responsehandler function should call after getting resopnse from searchwithCategoryName method ', () => {
    spyOn(component, 'responsehandler').and.callThrough();
    component.responsehandler('');
    expect(component.responsehandler).toHaveBeenCalled();
  });
  
  it('getRandomMeal function should call From ngOnInit ', () => {
    spyOn(component, 'getRandomMeal').and.callThrough();
    component.getRandomMeal();
    expect(component.getRandomMeal).toHaveBeenCalled();
    expect(component.RandomMeal).toEqual([]);
  });

  it('It Should call getCategories from ngOnInit ', () => {
    spyOn(component, 'getCategories').and.callThrough();
    component.getCategories();
    expect(component.getCategories).toHaveBeenCalled();
    expect(component.categoriesList.length).toEqual(0);
  });

  it('It Should call ClickOnCategory and Navigate to Recipes page when click on category', waitForAsync(inject([Router], (router:any) => {
    spyOn(router, 'navigate').and.stub();
    component.ClickOnCategory('id');
    expect(router.navigate).toHaveBeenCalledWith(['./meals/Resipes', 'id']);
  })));

  
});

