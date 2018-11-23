import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDetailCommentItemComponent } from './board-detail-comment-item.component';

describe('BoardDetailCommentItemComponent', () => {
  let component: BoardDetailCommentItemComponent;
  let fixture: ComponentFixture<BoardDetailCommentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardDetailCommentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDetailCommentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
