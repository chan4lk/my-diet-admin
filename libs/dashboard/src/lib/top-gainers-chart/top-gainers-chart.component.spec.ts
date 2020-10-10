import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGainersChartComponent } from './top-gainers-chart.component';

describe('TopGainersChartComponent', () => {
  let component: TopGainersChartComponent;
  let fixture: ComponentFixture<TopGainersChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopGainersChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGainersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
