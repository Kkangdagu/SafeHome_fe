export interface Table {
  cells: Cell[];
}

export interface Cell {
  cellTextLines: CellTextLine[];
  rowIndex: number;
  columnIndex: number;
  columnSpan: number;
}

export interface CellWord {
  inferText: string;
  rowIndex: number;
  columnIndex: number;
}

interface CellTextLine {
  cellWords: CellWord[];
}
