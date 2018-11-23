import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDetailCommentComponent } from './board-detail-comment.component';

describe('BoardDetailCommentComponent', () => {
  let component: BoardDetailCommentComponent;
  let fixture: ComponentFixture<BoardDetailCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardDetailCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDetailCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
