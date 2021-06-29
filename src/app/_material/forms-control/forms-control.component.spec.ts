import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsControlComponent } from './forms-control.component';

describe('FormsControlComponent', () => {
  let component: FormsControlComponent;
  let fixture: ComponentFixture<FormsControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
