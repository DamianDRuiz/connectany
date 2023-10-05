import { Cell } from 'src/app/commonTypes/Cell'
import { cellIsOwnedByPlayer } from 'src/app/utils/cells/cellIsOwnedByPlayer'
import { getCellByCoords } from 'src/app/utils/cells/getCellByCoords'

export function diagonalWinCheck(
  cell: number | string | any,
  cells: Cell[],
  rows: number,
  columns: number,
  player: number,
  winRequiredCount: number
) {
  if (cell == null) return

  const cellX: number = cells[cell].x
  const cellY: number = cells[cell].y
  let forwardTickedCells: Coordinates[] = [[cellX, cellY]]
  let backwardTickedCells: Coordinates[] = [[cellX, cellY]]
  let tempX: number
  let tempY: number
  let adjacentCell: Cell

  //Check forward slash shaped diagonal ( / ) (2 Parts)

  // Check toward right and up ( / ) (1/2)

  tempX = cellX
  tempY = cellY

  while (tempX < columns && tempY > 1) {
    tempX++
    tempY--
    adjacentCell = getCellByCoords(tempX, tempY, cells)

    if (cellIsOwnedByPlayer(adjacentCell, player))
      forwardTickedCells.push([tempX, tempY])
  }

  // Check toward left and down ( / ) (2/2)

  tempX = cellX
  tempY = cellY

  while (tempX > 1 && tempY < rows) {
    tempX--
    tempY++
    adjacentCell = getCellByCoords(tempX, tempY, cells)

    if (cellIsOwnedByPlayer(adjacentCell, player))
      forwardTickedCells.push([tempX, tempY])
  }

  if (forwardTickedCells.length == winRequiredCount) return true

  // Check backward slash shaped diagonal ( \ ) (2 Parts)
  // Check toward left and up ( \ ) (1/2)

  tempX = cellX
  tempY = cellY

  while (tempX > 1 && tempY > 1) {
    tempX--
    tempY--
    adjacentCell = getCellByCoords(tempX, tempY, cells)

    if (cellIsOwnedByPlayer(adjacentCell, player))
      backwardTickedCells.push([tempX, tempY])
  }

  // Check toward right and down ( \ ) (2/2)

  tempX = cellX
  tempY = cellY

  while (tempX < columns && tempY < rows) {
    tempX++
    tempY++
    adjacentCell = getCellByCoords(tempX, tempY, cells)

    if (cellIsOwnedByPlayer(adjacentCell, player))
      backwardTickedCells.push([tempX, tempY])
  }

  if (backwardTickedCells.length === winRequiredCount) return true

  return false
}

type Coordinates = [number, number]
