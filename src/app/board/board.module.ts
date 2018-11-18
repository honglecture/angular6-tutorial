import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';
import { BoardRegComponent } from './board-reg/board-reg.component';
import { BoardUpdateComponent } from './board-update/board-update.component';
import { BoardRoutingModule } from './board-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BoardComponent, BoardListComponent, BoardDetailComponent, BoardRegComponent, BoardUpdateComponent],
  imports: [
    CommonModule,

    /* custom module */
    BoardRoutingModule,
    SharedModule
  ]
})
export class BoardModule { }