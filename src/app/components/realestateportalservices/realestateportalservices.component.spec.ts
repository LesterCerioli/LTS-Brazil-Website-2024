import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateportalservicesComponent } from './realestateportalservices.component';

describe('RealestateportalservicesComponent', () => {
  let component: RealestateportalservicesComponent;
  let fixture: ComponentFixture<RealestateportalservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealestateportalservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealestateportalservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
