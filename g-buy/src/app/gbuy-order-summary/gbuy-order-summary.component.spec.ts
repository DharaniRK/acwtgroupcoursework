import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbuyOrderSummaryComponent } from './gbuy-order-summary.component';

describe('GbuyOrderSummaryComponent', () => {
  let component: GbuyOrderSummaryComponent;
  let fixture: ComponentFixture<GbuyOrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GbuyOrderSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GbuyOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
