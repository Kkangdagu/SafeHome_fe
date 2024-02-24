import { Cell, CellWord, Table } from '@/types/ocr';

import { SubContainer } from '../Layout';

interface IResult {
  tableData: Table[];
}

export default function AnalyzingResult({ tableData }: IResult) {
  return (
    <SubContainer>
      <div className="h-full">
        {tableData.map((table: Table) => (
          <div key={table.cells[0].rowIndex} className="mb-5">
            <table className="table-auto">
              <tbody>
                {Array.from(
                  {
                    length:
                      Math.max(...table.cells.map((cell) => cell.rowIndex)) + 1,
                  },
                  (_, rowIndex) => (
                    <tr key={rowIndex} className="border">
                      {table.cells
                        .filter((cell) => cell.rowIndex === rowIndex)
                        .sort((a, b) => a.columnIndex - b.columnIndex)
                        .map((cell: Cell) => (
                          <td
                            key={table.cells[0].columnSpan}
                            className="border p-2 text-left whitespace-normal overflow-auto"
                            colSpan={cell.columnSpan}>
                            {cell.cellTextLines.length > 0 &&
                              cell.cellTextLines[0].cellWords
                                .map((cellWord: CellWord) => cellWord.inferText)
                                .join(' ')}
                          </td>
                        ))}
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </SubContainer>
  );
}
