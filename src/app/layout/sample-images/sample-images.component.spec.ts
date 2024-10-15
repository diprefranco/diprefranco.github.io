import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleImagesComponent } from './sample-images.component';

describe('SampleImagesComponent', () => {
  let component: SampleImagesComponent;
  let fixture: ComponentFixture<SampleImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
