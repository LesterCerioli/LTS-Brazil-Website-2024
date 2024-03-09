import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalservicesComponent } from './educationalservices.component';

describe('EducationalservicesComponent', () => {
  let component: EducationalservicesComponent;
  let fixture: ComponentFixture<EducationalservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationalservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
