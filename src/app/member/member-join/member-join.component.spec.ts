import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberJoinComponent } from './member-join.component';

describe('MemberJoinComponent', () => {
  let component: MemberJoinComponent;
  let fixture: ComponentFixture<MemberJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
