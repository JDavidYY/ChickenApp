import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderActiveComponent } from './order-active.component';

describe('OrderActiveComponent', () => {
  let component: OrderActiveComponent;
  let fixture: ComponentFixture<OrderActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
