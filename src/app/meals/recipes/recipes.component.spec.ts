import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RecipesService } from 'src/app/services/recipes.service';
import { RecipesComponent } from './recipes.component';

describe('RecipesComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;
  let recipesService: RecipesService;
 
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule],
      declarations: [ RecipesComponent ],
      providers: [RecipesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    recipesService = TestBed.inject(RecipesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Testing getSubCategories function', () => {
    spyOn(component, 'getSubCategories').and.callThrough();
    component.getSubCategories('id');
    expect(component.getSubCategories).toHaveBeenCalledWith('id');
  });
  
  it('Testing ClickOnsubcategory function calling', waitForAsync(inject([Router], (router:any) => {
    spyOn(router, 'navigate').and.stub();
    component.ClickOnsubcategory('id');
    expect(router.navigate).toHaveBeenCalledWith(['./meals/Mealsdetails','id']);
  })));

})
