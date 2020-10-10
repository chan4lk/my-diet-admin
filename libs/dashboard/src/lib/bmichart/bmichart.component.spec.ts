import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMIChartComponent } from './bmichart.component';

describe('BMIChartComponent', () => {
  let component: BMIChartComponent;
  let fixture: ComponentFixture<BMIChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMIChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BMIChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
