import { Cell } from 'src/app/commonTypes/Cell'
import { getCellByCoords } from 'src/app/utils/cells/getCellByCoords'
import { isCellOwnedByPlayer } from 'src/app/utils/cells/isCellOwnedByPlayer'

export function isDiagonalWinExp(
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

export function getDiagonalRowBoundaries(cell: any, cells: Cell[]) {
  const cellX = cell.x
  const cellY = cell.y
  const lastCell = cells[cells.length - 1]
  const maxX = lastCell.x
  const maxY = lastCell.y
  let forwardUpperBoundary
  let forwardLowerBoundary
  let backwardUpperBoundary
  let backwardLowerBoundary

  // Backwards
  //To Top
  backwardUpperBoundary = calcBackwardUpperBoundary(cellX, cellY, maxX)

  //To bottom
  let xCount = cellX
  let yCount = cellY

  while (xCount < maxX && yCount < maxY) {
    xCount++
    yCount++
  }

  backwardLowerBoundary = [xCount, yCount]

  // Forwards
  //to top
  xCount = cellX
  yCount = cellY

  while (xCount < maxX && yCount > 1) {
    xCount++
    yCount--
  }

  forwardUpperBoundary = [xCount, yCount]

  //to bottom
  forwardLowerBoundary = calcForwardLowerBoundary(cellX, cellY, maxY)

  return {
    backwardUpperBoundary,
    backwardLowerBoundary,
    forwardUpperBoundary,
    forwardLowerBoundary,
  }

  //return calcBackwardUpperBoundary(cellX, cellY, maxX)
}

function calcBackwardUpperBoundary(cellX: number, cellY: number, maxX: number) {
  //if (cellX == maxX || cellY == 1) return [cellX, cellY]

  let x
  let y
  let distanceFromTop = cellY - 1
  let distanceFromRight = maxX - cellX
  let amountToFactor = 0

  if (distanceFromTop > distanceFromRight) amountToFactor = distanceFromRight
  else if (distanceFromRight > distanceFromTop) amountToFactor = distanceFromTop
  else amountToFactor = distanceFromTop

  x = cellX - amountToFactor
  y = cellY - amountToFactor

  return [x, y]
}

function calcForwardLowerBoundary(cellX: number, cellY: number, maxY: number) {
  //if (cellY == maxY || cellX == 1) return [cellX, cellY]

  let x
  let y
  let distanceFromBottom = maxY - cellY
  let distanceFromLeft = cellX - 1
  let amountToFactor = 0

  if (distanceFromBottom > distanceFromLeft) amountToFactor = distanceFromLeft
  else if (distanceFromBottom < distanceFromLeft)
    amountToFactor = distanceFromBottom
  else if (distanceFromBottom == distanceFromLeft)
    amountToFactor = distanceFromBottom

  x = cellX - amountToFactor
  y = cellY + amountToFactor

  return [x, y]
}

type Coordinates = [number, number]
