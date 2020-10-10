import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLoosersChartComponent } from './top-loosers-chart.component';

describe('TopLoosersChartComponent', () => {
  let component: TopLoosersChartComponent;
  let fixture: ComponentFixture<TopLoosersChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopLoosersChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLoosersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
