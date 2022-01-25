import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaintingPixel {
  private map: string[][] = [];
  private totalRows = 0;
  private totalColumn = 0;

  fillColor(col: number, row: number, color: string): void {
    if (!this.map[row]) {
      this.map[row] = [];
    }
    this.map[row][col] = color;
    if (row > this.totalRows) {
      this.totalRows = row;
    }
    if (col > this.totalColumn) {
      this.totalColumn = col;
    }
  }

  getColorAt(col: number, row: number): string {
    if (this.map && this.map[row] && this.map[row][col]) {
      return this.map[row][col];
    }
    return 'White';
  }

	rowColor(row: number, colFrom: number, colTo: number, color: string): void {
    for (let i = colFrom; i <= colTo; i++) {
      this.fillColor(i, row, color);
    }
  }

  colColor(col: number, rowFrom: number, rowTo: number, color: string): void {
    for (let i = rowFrom; i <= rowTo; i++) {
      this.fillColor(col, i, color);
    }
  }

  createScreen(): string[][] {
    const printRows = [];
    for (let i = 1; i <= this.totalRows; i++) {
      const printColumns = [];
      for (let j = 1; j <= this.totalColumn; j++) {
        printColumns.push(this.getColorAt(j, i));
      }
      printRows.push(printColumns);
    }
    return printRows;
  }

  floodFill(col: number, row: number, color: string): void {
    const oldColor = this.getColorAt(col, row);
    this.floodRecursive(col, row, oldColor, color);
  }

  floodRecursive(col: number, row: number, oldColor: string, newColor: string) {
    if (
      row > 1 &&
      col > 1 &&
      row <= this.totalRows &&
      col <= this.totalColumn &&
      this.getColorAt(col, row) != oldColor
    ) {
      return;
    }
    this.fillColor(col, row, newColor);
    this.floodRecursive(col + 1, row, oldColor, newColor);
    this.floodRecursive(col - 1, row, oldColor, newColor);
    this.floodRecursive(col, row + 1, oldColor, newColor);
    this.floodRecursive(col, row - 1, oldColor, newColor);
  }
}
