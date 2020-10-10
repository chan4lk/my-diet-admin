import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRatedByDateComponent } from './food-rated-by-date.component';

describe('FoodRatedByDateComponent', () => {
  let component: FoodRatedByDateComponent;
  let fixture: ComponentFixture<FoodRatedByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodRatedByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodRatedByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
