import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isHumanTurn: boolean = true;
  isHumanWinner: boolean = false;
  isComputerWinner: boolean = false;
  tracker: string[] = new Array(9).fill(null);

  tiles: Tile[] = [
    { text: '', cols: 1, rows: 1, color: 'lightblue' },
    { text: '', cols: 1, rows: 1, color: 'lightgreen' },
    { text: '', cols: 1, rows: 1, color: 'lightgrey' },
    { text: '', cols: 1, rows: 1, color: 'lightblue' },
    { text: '', cols: 1, rows: 1, color: 'lightornage' },
    { text: '', cols: 1, rows: 1, color: 'lightyellow' },
    { text: '', cols: 1, rows: 1, color: 'lightblue' },
    { text: '', cols: 1, rows: 1, color: 'lightgreen' },
    { text: '', cols: 1, rows: 1, color: 'lightpink' },
  ];

  setMove(index: number): void {
    if (
      this.tracker[index] == null &&
      !this.isHumanWinner &&
      !this.isComputerWinner
    ) {
      this.tracker[index] = 'X';
      this.tiles[index].text = 'X';
      this.isHumanWinner = this.checkIfWinner();
      this.isHumanTurn = false;
      if(!this.isHumanWinner){
        this.findMove();
        this.isComputerWinner = this.checkIfWinner();
        if(this.isComputerWinner){
          this.isHumanTurn =false;
        }
      }
    }
  }
  checkIfWinner():boolean
  {
    if (
      (this.tracker[0] == this.tracker[1] &&
        this.tracker[0] == this.tracker[2] &&
        this.tracker[0] != null) ||
      (this.tracker[3] == this.tracker[4] &&
        this.tracker[3] == this.tracker[5] &&
        this.tracker[3] != null) ||
      (this.tracker[6] == this.tracker[7] &&
        this.tracker[6] == this.tracker[8] &&
        this.tracker[6] != null) ||
      (this.tracker[0] == this.tracker[3] &&
        this.tracker[0] == this.tracker[6] &&
        this.tracker[0] != null) ||
      (this.tracker[1] == this.tracker[4] &&
        this.tracker[1] == this.tracker[7] &&
        this.tracker[1] != null) ||
      (this.tracker[2] == this.tracker[5] &&
        this.tracker[2] == this.tracker[8] &&
        this.tracker[2] != null) ||
      (this.tracker[0] == this.tracker[4] &&
        this.tracker[0] == this.tracker[8] &&
        this.tracker[0] != null) ||
      (this.tracker[2] == this.tracker[4] &&
        this.tracker[2] == this.tracker[6] &&
        this.tracker[2] != null)

    ) {
      return true;
    }
    return false;
  }

  findMove():void{
     let isMoved =false;
     while(!isMoved){
      let possibleMoveIndex = Math.floor(Math.random()* 9);
      if(this.tracker[possibleMoveIndex] == 'null'){
        this.tracker[possibleMoveIndex] == 'O';
        this.tiles[possibleMoveIndex].text == 'O';
        this.isHumanTurn=true;
        isMoved=true;
      }
     }

    }}
