import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRegComponent } from './board-reg.component';

describe('BoardRegComponent', () => {
  let component: BoardRegComponent;
  let fixture: ComponentFixture<BoardRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
