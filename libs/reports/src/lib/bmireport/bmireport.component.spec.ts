import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMIReportComponent } from './bmireport.component';

describe('BMIReportComponent', () => {
  let component: BMIReportComponent;
  let fixture: ComponentFixture<BMIReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMIReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BMIReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
