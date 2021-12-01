import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RecipesService } from 'src/app/services/recipes.service';
import { MealsdetailsComponent } from './mealsdetails.component';


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


  it('Testing getMealsDetails function', () => {
    spyOn(component, 'getMealsDetails').and.callThrough();
    component.getMealsDetails('searchvalue');
    expect(component.getMealsDetails).toHaveBeenCalledWith('searchvalue');
  });

})
