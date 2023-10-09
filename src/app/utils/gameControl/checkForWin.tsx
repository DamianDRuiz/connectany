import { Cell } from 'src/app/commonTypes/Cell'
import { diagonalWinCheck as isDiagonalWin } from 'src/app/utils/winChecks/diagonalWinCheck'
import { straightWinCheck as isStraightWin } from 'src/app/utils/winChecks/straightWinCheck'

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
