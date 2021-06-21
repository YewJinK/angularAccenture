import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRegisteredUsersComponent } from './list-of-registered-users.component';

describe('ListOfRegisteredUsersComponent', () => {
  let component: ListOfRegisteredUsersComponent;
  let fixture: ComponentFixture<ListOfRegisteredUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfRegisteredUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfRegisteredUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
