import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListDeliveryboyComponent } from './order-list-deliveryboy.component';

describe('OrderListDeliveryboyComponent', () => {
  let component: OrderListDeliveryboyComponent;
  let fixture: ComponentFixture<OrderListDeliveryboyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderListDeliveryboyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListDeliveryboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
