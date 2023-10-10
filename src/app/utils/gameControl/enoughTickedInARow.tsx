import { Cell } from 'src/app/commonTypes/Cell'

export function enoughTickedInARow(
  tickedCells: Cell[],
  direction: 'vertical' | 'horizontal',
  player: number,
  winCount: number
) {
  let inARowCount = 1

  for (let i = 0; i < tickedCells.length; i++) {
    if (i + 1 in tickedCells == false) break

    const currentCell: Cell = tickedCells[i]
    const nextCell: Cell = tickedCells[i + 1]

    if (direction == 'horizontal') {
      if (currentCell.x + 1 == nextCell.x && nextCell.owner == player)
        inARowCount++
      else inARowCount = 1
    }

    if (direction == 'vertical') {
      if (currentCell.y + 1 == nextCell.y && nextCell.owner == player)
        inARowCount++
      else inARowCount = 1
    }
  }

  if (inARowCount == winCount) return true

  return false
}
