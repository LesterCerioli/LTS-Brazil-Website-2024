import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsservicesComponent } from './cmsservices.component';

describe('CmsservicesComponent', () => {
  let component: CmsservicesComponent;
  let fixture: ComponentFixture<CmsservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmsservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmsservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
