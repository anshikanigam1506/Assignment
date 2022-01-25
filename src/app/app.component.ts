import { Component } from '@angular/core';
import { PaintingPixel } from './paninting-pixel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'painting-pixels';
  table1: string[][] = [];
  table2: string[][] = [];
  table3: string[][] = [];
  table4: string[][] = [];
  table5: string[][] = [];
  table6: string[][] = [];
  table7: string[][] = [];

  constructor(public pixel: PaintingPixel) {
    pixel.colorIt(8, 2, 'Yellow');
    this.table1 = pixel.createScreen();
    pixel.colorIt(8, 4, 'Blue');
    this.table2 = pixel.createScreen();
    pixel.colorIt(9, 5, 'Blue');
    this.table3 = pixel.createScreen();
    pixel.colorItRow(3, 2, 7, 'Blue');
    this.table4 = pixel.createScreen();
    pixel.colorItRow(4, 5, 6, 'Blue');
    this.table5 = pixel.createScreen();
    pixel.colorItCol(3, 2, 6, 'Green');
    this.table6 = pixel.createScreen();
    pixel.floodFill(6, 3, 'Red');
    this.table7 = pixel.createScreen();
  }

  getColor(color: any): any {
    switch (color) {
      case 'Yellow':
        return '#ffd966';
        break;
      case 'Green':
        return '#a8d08d';
        break;
      case 'Red':
        return '#fe0000';
        break;
      case 'Blue':
        return '#9cc2e5';
        break;
      case 'White':
        return '';
        break;
    }
  }
}
