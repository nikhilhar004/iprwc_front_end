import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIcecreamComponent } from './add-icecream.component';

describe('AddIcecreamComponent', () => {
  let component: AddIcecreamComponent;
  let fixture: ComponentFixture<AddIcecreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIcecreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIcecreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
