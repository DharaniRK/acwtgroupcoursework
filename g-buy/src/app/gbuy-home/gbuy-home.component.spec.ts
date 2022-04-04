import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbuyHomeComponent } from './gbuy-home.component';

describe('GbuyHomeComponent', () => {
  let component: GbuyHomeComponent;
  let fixture: ComponentFixture<GbuyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GbuyHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GbuyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
