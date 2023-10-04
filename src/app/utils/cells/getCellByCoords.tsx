import { Cell } from 'src/app/commonTypes/Cell'

export function getCellByCoords(x: number, y: number, cells: Cell[]) {
  for (let i = 0; i < cells.length; i++) {
    const currentCell = cells[i]
    if (currentCell.x === x && currentCell.y === y) return currentCell
  }
  return cells[0]
}
