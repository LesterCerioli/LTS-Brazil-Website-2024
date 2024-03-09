import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodappdevelopmentComponent } from './foodappdevelopment.component';

describe('FoodappdevelopmentComponent', () => {
  let component: FoodappdevelopmentComponent;
  let fixture: ComponentFixture<FoodappdevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodappdevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodappdevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
