import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubmittedFormComponent } from './view-submitted-form.component';

describe('ViewSubmittedFormComponent', () => {
  let component: ViewSubmittedFormComponent;
  let fixture: ComponentFixture<ViewSubmittedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubmittedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSubmittedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
