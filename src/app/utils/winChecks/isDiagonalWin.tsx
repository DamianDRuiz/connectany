import { Cell } from 'src/app/commonTypes/Cell'
import { getCellByCoords } from 'src/app/utils/cells/getCellByCoords'
import { isCellOwnedByPlayer } from 'src/app/utils/cells/isCellOwnedByPlayer'

export function isDiagonalWin(
  cell: number | string | any,
  cells: Cell[],
  player: number,
  winRequiredCount: number
) {
  if (cell == null) return

  const lastCell = cells[cells.length - 1]
  const rows = lastCell.x
  const columns = lastCell.y
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

    if (isCellOwnedByPlayer(adjacentCell, player))
      forwardTickedCells.push([tempX, tempY])
    else break
  }

  // Check toward left and down ( / ) (2/2)

  tempX = cellX
  tempY = cellY

  while (tempX > 1 && tempY < rows) {
    tempX--
    tempY++
    adjacentCell = getCellByCoords(tempX, tempY, cells)

    if (isCellOwnedByPlayer(adjacentCell, player))
      forwardTickedCells.push([tempX, tempY])
    else break
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

    if (isCellOwnedByPlayer(adjacentCell, player))
      backwardTickedCells.push([tempX, tempY])
    else break
  }

  // Check toward right and down ( \ ) (2/2)

  tempX = cellX
  tempY = cellY

  while (tempX < columns && tempY < rows) {
    tempX++
    tempY++
    adjacentCell = getCellByCoords(tempX, tempY, cells)

    if (isCellOwnedByPlayer(adjacentCell, player))
      backwardTickedCells.push([tempX, tempY])
    else break
  }

  if (backwardTickedCells.length === winRequiredCount) return true

  return false
}

type Coordinates = [number, number]
