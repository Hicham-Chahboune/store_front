import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModifyProductsComponent } from './add-modify-products.component';

describe('AddModifyProductsComponent', () => {
  let component: AddModifyProductsComponent;
  let fixture: ComponentFixture<AddModifyProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModifyProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModifyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
