import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';
import { BoardRegComponent } from './board-reg/board-reg.component';
import { BoardUpdateComponent } from './board-update/board-update.component';

const routes: Routes = [
  {path: 'board', component: BoardComponent, children:[
    {path: '', pathMatch: 'full', redirectTo: 'list'},
    {path: 'list', component: BoardListComponent},
    {path: 'detail', component: BoardDetailComponent},
    {path: 'reg', component: BoardRegComponent},
    {path: 'update', component: BoardUpdateComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }