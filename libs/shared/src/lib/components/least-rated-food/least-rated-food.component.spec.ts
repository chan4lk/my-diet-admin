import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeastRatedFoodComponent } from './least-rated-food.component';

describe('LeastRatedFoodComponent', () => {
  let component: LeastRatedFoodComponent;
  let fixture: ComponentFixture<LeastRatedFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeastRatedFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeastRatedFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
