import { Cell } from 'src/app/commonTypes/Cell'
import { enoughTickedInARow } from '../gameControl/enoughTickedInARow'

export function isStraightWin(
  cell: number | string | any,
  cells: Cell[],
  player: number,
  winRequiredCount: number
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

    tickedHorizontal.push(cells[i])
  }

  for (let i = 0; i < cells.length; i++) {
    if (
      cells[i].x != cellColumn ||
      cells[i].ticked != true ||
      cells[i].owner != player
    )
      continue

    tickedVertical.push(cells[i])
  }

  if (
    enoughTickedInARow(tickedVertical, 'vertical', player, winRequiredCount) ||
    enoughTickedInARow(tickedHorizontal, 'horizontal', player, winRequiredCount)
  )
    return true

  return false
}
