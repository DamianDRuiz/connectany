import { Cell } from 'src/app/commonTypes/Cell'

export default function getCellID(cell: Cell, cells: Cell[]) {
  for (let i = 0; i < cells.length; i++) {
    const currentCell: Cell = cells[i]
    if (currentCell.x == cell.x && currentCell.y == cell.y) return i
  }
  return -1
}
