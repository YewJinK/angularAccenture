import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingTitleComponent } from './banking-title.component';

describe('BankingTitleComponent', () => {
  let component: BankingTitleComponent;
  let fixture: ComponentFixture<BankingTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
