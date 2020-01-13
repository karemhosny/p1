import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductDetailsComponent } from './prduct-details.component';

describe('PrductDetailsComponent', () => {
  let component: PrductDetailsComponent;
  let fixture: ComponentFixture<PrductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
