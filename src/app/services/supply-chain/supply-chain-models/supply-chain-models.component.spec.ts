import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyChainModelsComponent } from './supply-chain-models.component';

describe('SupplyChainModelsComponent', () => {
  let component: SupplyChainModelsComponent;
  let fixture: ComponentFixture<SupplyChainModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyChainModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyChainModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
