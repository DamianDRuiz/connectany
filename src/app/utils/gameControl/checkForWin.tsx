import { Cell } from 'src/app/commonTypes/Cell'
import { diagonalWinCheck } from 'src/app/utils/winChecks/diagonalWinCheck'
import { straightWinCheck } from 'src/app/utils/winChecks/straightWinCheck'

export function checkForWin(
  latestCellClicked: number | null,
  cells: Cell[],
  columns: number,
  rows: number,
  currentPlayer: number,
  winRequiredCount: number
) {
  if (
    straightWinCheck(
      latestCellClicked,
      cells,
      columns,
      rows,
      currentPlayer,
      winRequiredCount
    )
  ) {
    return true
  }
  if (
    diagonalWinCheck(
      latestCellClicked,
      cells,
      rows,
      columns,
      currentPlayer,
      winRequiredCount
    )
  ) {
    return true
  }
  return false
}
