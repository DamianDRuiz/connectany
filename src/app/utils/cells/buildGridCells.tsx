import { Cell } from 'src/app/commonTypes/Cell'

export function buildGridCells(rows: number, columns: number) {
  const total = rows * columns
  const cells: Cell[] = []

  let xIndex = 1
  let yIndex = 1

  for (let i = 0; i < total; i++) {
    const newCell: Cell = {
      x: xIndex,
      y: yIndex,
      ticked: false,
      owner: null,
    }

    cells.push(newCell)

    xIndex++

    if (xIndex > columns) {
      xIndex = 1
      yIndex++
    }
  }

  return cells
}
