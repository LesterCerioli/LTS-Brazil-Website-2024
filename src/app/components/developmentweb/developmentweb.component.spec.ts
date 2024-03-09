import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentwebComponent } from './developmentweb.component';

describe('DevelopmentwebComponent', () => {
  let component: DevelopmentwebComponent;
  let fixture: ComponentFixture<DevelopmentwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopmentwebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevelopmentwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
