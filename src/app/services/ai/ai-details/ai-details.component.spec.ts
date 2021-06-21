import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDetailsComponent } from './ai-details.component';

describe('AiDetailsComponent', () => {
  let component: AiDetailsComponent;
  let fixture: ComponentFixture<AiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
