export interface IReviewProps {
  reviewData: Table[];
  selected: number;
  setSelected: (value: number) => void;
  category1: number;
  setCategory1: (value: number) => void;
  category2: number;
  setCategory2: (value: number) => void;
}

export interface Table {
  cells: Cell[];
}

export interface CellWord {
  inferText: string;
  rowIndex: number;
  columnIndex: number;
}

export interface Cell {
  cellTextLines: CellTextLine[];
  rowIndex: number;
  columnIndex: number;
  columnSpan: number;
}

interface CellTextLine {
  cellWords: CellWord[];
}
