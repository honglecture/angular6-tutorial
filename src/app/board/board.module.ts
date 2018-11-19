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

@NgModule({
  declarations: [BoardComponent, BoardListComponent, BoardDetailComponent, BoardRegComponent, BoardUpdateComponent, BoardListItemComponent],
  imports: [
    CommonModule,

    /* custom module */
    BoardRoutingModule,
    SharedModule
  ],
  providers: [BoardService]
})
export class BoardModule { }