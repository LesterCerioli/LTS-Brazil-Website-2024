import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxuiservicesComponent } from './uxuiservices.component';

describe('UxuiservicesComponent', () => {
  let component: UxuiservicesComponent;
  let fixture: ComponentFixture<UxuiservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UxuiservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UxuiservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
