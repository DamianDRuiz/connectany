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

  const cellX = cells[cell].x
  const cellY = cells[cell].y
  let forwardTickedCells = [[cellX, cellY]]
  let backwardTickedCellsOther = [[cellX, cellY]]
  let tempX
  let tempY

  //Check forward slash shaped diagonal ( / ) (2 Parts)

  // Check toward right and up ( / ) (1/2)

  tempX = cellX
  tempY = cellY

  while (tempX < columns && tempY > 1) {
    let tempCell: Cell
    tempX++
    tempY--
    tempCell = getCellByCoords(tempX, tempY, cells)

    if (tempCell.ticked && tempCell.owner == player)
      forwardTickedCells.push([tempX, tempY])
  }

  // Check toward left and down ( / ) (2/2)

  tempX = cellX
  tempY = cellY

  while (tempX > 1 && tempY < rows) {
    let tempCell: Cell
    tempX--
    tempY++
    tempCell = getCellByCoords(tempX, tempY, cells)

    if (tempCell.ticked && tempCell.owner == player)
      forwardTickedCells.push([tempX, tempY])
  }

  if (forwardTickedCells.length == columns) return true

  // Check backward slash shaped diagonal ( \ ) (2 Parts)
  // Check toward left and up ( \ ) (1/2)

  tempX = cellX
  tempY = cellY

  while (tempX > 1 && tempY > 1) {
    let tempCell: Cell
    tempX--
    tempY--
    tempCell = getCellByCoords(tempX, tempY, cells)

    if (tempCell.ticked && tempCell.owner == player)
      backwardTickedCellsOther.push([tempX, tempY])
  }

  // Check toward right and down ( \ ) (2/2)

  tempX = cellX
  tempY = cellY

  while (tempX < columns && tempY < rows) {
    let tempCell: Cell
    tempX++
    tempY++
    tempCell = getCellByCoords(tempX, tempY, cells)

    if (tempCell.ticked && tempCell.owner == player)
      backwardTickedCellsOther.push([tempX, tempY])
  }

  if (backwardTickedCellsOther.length === columns) return true

  return false
}
