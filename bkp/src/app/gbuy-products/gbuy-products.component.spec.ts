import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbuyProductsComponent } from './gbuy-products.component';

describe('GbuyProductsComponent', () => {
  let component: GbuyProductsComponent;
  let fixture: ComponentFixture<GbuyProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GbuyProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GbuyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
