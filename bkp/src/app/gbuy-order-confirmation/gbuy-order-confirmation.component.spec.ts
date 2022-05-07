import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbuyOrderConfirmationComponent } from './gbuy-order-confirmation.component';

describe('GbuyOrderConfirmationComponent', () => {
  let component: GbuyOrderConfirmationComponent;
  let fixture: ComponentFixture<GbuyOrderConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GbuyOrderConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GbuyOrderConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
