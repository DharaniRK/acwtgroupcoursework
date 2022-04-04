import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbuyLoginComponent } from './gbuy-login.component';

describe('GbuyLoginComponent', () => {
  let component: GbuyLoginComponent;
  let fixture: ComponentFixture<GbuyLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GbuyLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GbuyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
