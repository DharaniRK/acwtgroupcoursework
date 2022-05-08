import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbuyLogoutComponent } from './gbuy-logout.component';

describe('GbuyLogoutComponent', () => {
  let component: GbuyLogoutComponent;
  let fixture: ComponentFixture<GbuyLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GbuyLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GbuyLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
