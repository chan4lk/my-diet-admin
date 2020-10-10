import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCategoryChartComponent } from './health-category-chart.component';

describe('HealthCategoryChartComponent', () => {
  let component: HealthCategoryChartComponent;
  let fixture: ComponentFixture<HealthCategoryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthCategoryChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCategoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
