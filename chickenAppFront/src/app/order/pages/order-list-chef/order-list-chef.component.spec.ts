import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListChefComponent } from './order-list-chef.component';

describe('OrderListChefComponent', () => {
  let component: OrderListChefComponent;
  let fixture: ComponentFixture<OrderListChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderListChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
