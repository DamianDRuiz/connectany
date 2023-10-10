import { Cell } from 'src/app/commonTypes/Cell'
import { isDiagonalWin } from 'src/app/utils/winChecks/isDiagonalWin'
import { isStraightWin } from 'src/app/utils/winChecks/isStraightWin'

export function checkForWin(
  latestCellClicked: number | null,
  cells: Cell[],
  currentPlayer: number,
  winRequiredCount: number
) {
  if (
    isStraightWin(latestCellClicked, cells, currentPlayer, winRequiredCount) ||
    isDiagonalWin(latestCellClicked, cells, currentPlayer, winRequiredCount)
  )
    return true

  return false
}
