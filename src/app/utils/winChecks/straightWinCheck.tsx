import { Cell } from 'src/app/commonTypes/Cell'

export function straightWinCheck(
  cell: number | string | any,
  cells: Cell[],
  rows: number,
  columns: number,
  player: number
) {
  const cellRow = cells[cell].y
  const cellColumn = cells[cell].x
  const tickedHorizontal = []
  const tickedVertical = []

  for (let i = 0; i < cells.length; i++) {
    if (
      cells[i].y != cellRow ||
      cells[i].ticked != true ||
      cells[i].owner != player
    )
      continue

    tickedHorizontal.push([cells[i].x, cells[i].y])
  }

  for (let i = 0; i < cells.length; i++) {
    if (
      cells[i].x != cellColumn ||
      cells[i].ticked != true ||
      cells[i].owner != player
    )
      continue

    tickedVertical.push([cells[i].x, cells[i].y])
  }

  if (tickedHorizontal.length == columns || tickedVertical.length == rows)
    return true

  return false
}
