import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFormsComponent } from './display-forms.component';

describe('DisplayFormsComponent', () => {
  let component: DisplayFormsComponent;
  let fixture: ComponentFixture<DisplayFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
