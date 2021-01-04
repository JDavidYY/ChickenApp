import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboVerproductosComponent } from './combo-verproductos.component';

describe('ComboVerproductosComponent', () => {
  let component: ComboVerproductosComponent;
  let fixture: ComponentFixture<ComboVerproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboVerproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboVerproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
