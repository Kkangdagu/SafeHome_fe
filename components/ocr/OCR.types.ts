import { ChangeEvent, FormEvent } from 'react';

export interface IOCRProps {
  img?: string | null;
  setImg?: (value: string | null) => void;
  analyzeResult: any;
  setAnalyzeResult?: (value: []) => void;
  isProcessing?: boolean;
  onImageUpload?: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onImageAnalyzing?: (e: FormEvent<HTMLFormElement>) => Promise<unknown>;
  onRestImg?: () => void;
  isModal: boolean;
  closeModal?: () => void;
}

export interface IResultProps {
  selected: number;
  setSelected: (value: number) => void;
  category1: number;
  setCategory1: (value: number) => void;
  category2: number;
  setCategory2: (value: number) => void;
  setImg?: (value: string | null) => void;
  setAnalyzeResult?: (value: []) => void;
  analyzeResult: [];
}

export interface IResultContainer {
  analyzeResult: [];
  setImg?: (value: string | null) => void;
  setAnalyzeResult?: (value: []) => void;
}

export type CellWord = {
  inferText: string;
  rowIndex: number;
  columnIndex: number;
};

type CellTextLine = {
  cellWords: CellWord[];
};

export type Cell = {
  cellTextLines: CellTextLine[];
  rowIndex: number;
  columnIndex: number;
  columnSpan: number;
};

export type Table = {
  cells: Cell[];
};
