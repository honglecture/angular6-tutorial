import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';
import { BoardRegComponent } from './board-reg/board-reg.component';
import { BoardUpdateComponent } from './board-update/board-update.component';
import { BoardRoutingModule } from './board-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BoardService } from './services/board.service';
import { BoardListItemComponent } from './board-list/board-list-item/board-list-item.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardDetailCommentComponent } from './board-detail/board-detail-comment/board-detail-comment.component';
import { BoardDetailCommentItemComponent } from './board-detail/board-detail-comment/board-detail-comment-item/board-detail-comment-item.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [BoardComponent, BoardListComponent, BoardDetailComponent, BoardRegComponent, BoardUpdateComponent, BoardListItemComponent, BoardDetailCommentComponent, BoardDetailCommentItemComponent],
  imports: [
    CommonModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    /* custom module */
    BoardRoutingModule,
    SharedModule
  ],
  providers: [BoardService]
})
export class BoardModule { }