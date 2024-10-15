import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInformationComponent } from './more-information.component';

describe('MoreInformationComponent', () => {
  let component: MoreInformationComponent;
  let fixture: ComponentFixture<MoreInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
