import { Cell } from 'src/app/commonTypes/Cell'

export function getHighestEmptyCellInColumn(
  clickedCell: Cell,
  cells: Cell[]
): Cell {
  const clickedColumn = clickedCell.x
  const cellsInColumn = cells.filter((cell) => cell.x == clickedColumn)
  const initialIndex = cellsInColumn.length - 1

  for (let i = initialIndex; i > -1; i--) {
    const currentCell = cellsInColumn[i]
    if (!currentCell.ticked) return currentCell
  }

  return clickedCell
}
