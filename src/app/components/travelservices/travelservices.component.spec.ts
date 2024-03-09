import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelservicesComponent } from './travelservices.component';

describe('TravelservicesComponent', () => {
  let component: TravelservicesComponent;
  let fixture: ComponentFixture<TravelservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
