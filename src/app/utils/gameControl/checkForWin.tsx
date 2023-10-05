import { Cell } from 'src/app/commonTypes/Cell'
import { diagonalWinCheck } from 'src/app/utils/winChecks/diagonalWinCheck'
import { straightWinCheck } from 'src/app/utils/winChecks/straightWinCheck'
import { winGame } from 'src/app/utils/winChecks/winGame'

export function checkForWin(
  latestCellClicked: number | null,
  cells: Cell[],
  columns: number,
  rows: number,
  currentPlayer: number,
  winRequiredCount: number
) {
  const currentPlayerString = `Player ${currentPlayer}`

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
    winGame('Straight', currentPlayerString)
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
    winGame('Diagonal', currentPlayerString)
    return true
  }
  return false
}
