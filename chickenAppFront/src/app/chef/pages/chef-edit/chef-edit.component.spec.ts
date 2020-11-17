import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefEditComponent } from './chef-edit.component';

describe('ChefEditComponent', () => {
  let component: ChefEditComponent;
  let fixture: ComponentFixture<ChefEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
