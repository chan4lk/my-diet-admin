import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedFoodComponent } from './top-rated-food.component';

describe('TopRatedFoodComponent', () => {
  let component: TopRatedFoodComponent;
  let fixture: ComponentFixture<TopRatedFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
