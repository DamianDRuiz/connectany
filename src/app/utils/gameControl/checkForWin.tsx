import { Cell } from 'src/app/commonTypes/Cell'
import { diagonalWinCheck } from 'src/app/utils/winChecks/diagonalWinCheck'
import { straightWinCheck } from 'src/app/utils/winChecks/straightWinCheck'

export function checkForWin(
  latestCellClicked: number | null,
  cells: Cell[],
  currentPlayer: number,
  winRequiredCount: number
) {
  if (
    straightWinCheck(latestCellClicked, cells, currentPlayer, winRequiredCount)
  )
    return true

  if (
    diagonalWinCheck(latestCellClicked, cells, currentPlayer, winRequiredCount)
  )
    return true

  return false
}
