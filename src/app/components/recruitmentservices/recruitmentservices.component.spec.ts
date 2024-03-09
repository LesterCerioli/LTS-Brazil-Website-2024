import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentservicesComponent } from './recruitmentservices.component';

describe('RecruitmentservicesComponent', () => {
  let component: RecruitmentservicesComponent;
  let fixture: ComponentFixture<RecruitmentservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitmentservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecruitmentservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
