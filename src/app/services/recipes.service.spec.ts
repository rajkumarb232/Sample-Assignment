import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RecipesService } from './recipes.service';

describe('RecipesService', () => {
  let service: RecipesService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [RecipesService]
  }));

  it('should be created', () => {
    const service: RecipesService = TestBed.inject(RecipesService);
    expect(service).toBeTruthy();
  });

  it('Testing getRandomMeal function', () => {
    const service: RecipesService = TestBed.inject(RecipesService);
    expect(service.getRandomMeal).toBeTruthy();
   });

  
  it('Testing getAllCategories function', () => {
    const service: RecipesService = TestBed.inject(RecipesService);
    expect(service.getAllCategories).toBeTruthy();
   });


});
