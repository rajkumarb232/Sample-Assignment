import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

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

  
  it('Testing ClickOnBanner function calling', waitForAsync(inject([Router], (router:any) => {
    spyOn(router, 'navigate').and.stub();
    component.ClickOnBanner('id');
    expect(router.navigate).toHaveBeenCalledWith(['./meals/Mealsdetails','id']);
  })));

  it('Testing searchwithCategoryName ', () => {
    spyOn(component, 'searchwithCategoryName').and.callThrough();
    component.searchwithCategoryName('ratatouille');
    expect(component.searchwithCategoryName).toHaveBeenCalled();
    spyOn(component, 'mapcategoriesListData').and.callThrough();
    component.mapcategoriesListData();
    expect(component.mapcategoriesListData).toHaveBeenCalled();
  });

  it('Testing responsehandler function', () => {
    spyOn(component, 'responsehandler').and.callThrough();
    component.responsehandler('');
    expect(component.responsehandler).toHaveBeenCalled();
    // expect(component.RandomMeal).toEqual([]);
  });


  it('Testing getRandomMeal function', () => {
    spyOn(component, 'getRandomMeal').and.callThrough();
    component.getRandomMeal();
    expect(component.getRandomMeal).toHaveBeenCalled();
    expect(component.RandomMeal).toEqual([]);
  });

  it('It Should call getCategories from allgetCategories ', () => {
    spyOn(component, 'getCategories').and.callThrough();
    component.getCategories();
    expect(component.getCategories).toHaveBeenCalled();
    expect(component.categoriesList.length).toEqual(0);
    // expect(component.Searchresult).toBe(false)
  });

  it('Testing show details function calling', waitForAsync(inject([Router], (router:any) => {
    spyOn(router, 'navigate').and.stub();
    component.ClickOnCategory('id');
    expect(router.navigate).toHaveBeenCalledWith(['./meals/Resipes', 'id']);
  })));

  
});

