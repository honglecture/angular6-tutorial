import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Board } from 'src/app/core/models/board.model';
import { BoardService } from './board.service';

@Injectable({
  providedIn: 'root'
})
export class BoardListResolverService  implements Resolve<Board[]> {

  constructor(private boardService: BoardService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.boardService.getBoardList();
  }
}
