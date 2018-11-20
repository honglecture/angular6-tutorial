import { Injectable } from '@angular/core';
import { Board } from 'src/app/core/models/board.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BoardService } from './board.service';

@Injectable()
export class BoardDetailResolverService implements Resolve<Board> {

  constructor(private boardService:BoardService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
   const id = route.params['id'];
   return this.boardService.getBoard(id);
  }
}
