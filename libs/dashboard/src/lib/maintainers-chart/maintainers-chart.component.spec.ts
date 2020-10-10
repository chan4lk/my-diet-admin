import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainersChartComponent } from './maintainers-chart.component';

describe('MaintainersChartComponent', () => {
  let component: MaintainersChartComponent;
  let fixture: ComponentFixture<MaintainersChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintainersChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
