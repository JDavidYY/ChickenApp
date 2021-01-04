import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShowimageComponent } from './product-showimage.component';

describe('ProductShowimageComponent', () => {
  let component: ProductShowimageComponent;
  let fixture: ComponentFixture<ProductShowimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductShowimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShowimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
