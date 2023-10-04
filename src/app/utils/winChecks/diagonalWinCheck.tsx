import { Cell } from 'src/app/commonTypes/Cell'
import { getCellByCoords } from 'src/app/utils/cells/getCellByCoords'

export function diagonalWinCheck(
  cell: number | string | any,
  cells: Cell[],
  rows: number,
  columns: number,
  player: number
) {
  if (cell == null) return
  const cellColumn = cells[cell].x
  const cellRow = cells[cell].y
  const tickedCells = []
  tickedCells.push([cellColumn, cellRow])

  //lets check upwards toward left
  let tempColumn = cellColumn
  let tempRow = cellRow

  if (cellColumn > 1 && cellRow > 1) {
    for (let i = cellColumn; i > 1; i--) {
      const cords: number[] = []

      tempColumn--
      tempRow--
      cords[0] = tempColumn
      cords[1] = tempRow

      let tempCell: Cell = getCellByCoords(cords[0], cords[1], cells)

      if (tempCell.ticked && tempCell.owner == player) tickedCells.push(cords)
    }
  }

  //lets check downwards toward right
  tempColumn = cellColumn
  tempRow = cellRow

  if (cellColumn < columns && cellRow < rows) {
    for (let i = cellColumn; i < rows; i++) {
      const cords: number[] = []

      tempColumn++
      tempRow++
      cords[0] = tempColumn
      cords[1] = tempRow

      let tempCell: Cell = getCellByCoords(cords[0], cords[1], cells)

      if (tempCell.ticked && tempCell.owner == player) tickedCells.push(cords)
    }
  }

  if (tickedCells.length === columns) return true

  return false
}
