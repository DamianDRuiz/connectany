import { useEffect, useState } from 'react'
import { Cell } from 'src/app/commonTypes/Cell'
import { DEFAULT_COLUMN_COUNT, DEFAULT_ROW_COUNT } from 'src/app/constants'
import { buildGridCells } from 'src/app/utils/cells/buildGridCells'
import { checkForWin } from 'src/app/utils/gameControl/checkForWin'
import { isNewGame } from 'src/app/utils/gameControl/isNewGame'
import { switchPlayer } from 'src/app/utils/gameControl/switchPlayer'

export function useCells(
  rows: number = DEFAULT_ROW_COUNT,
  columns: number = DEFAULT_COLUMN_COUNT
) {
  const [currentPlayer, setCurrentPlayer] = useState<number>(1)
  const [cells, setCells] = useState<Cell[]>(buildGridCells(rows, columns))
  const [latestCellClicked, setLatestCellClicked] = useState<number | null>(
    null
  )

  const handleCellClick = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement
    const cellId: number = parseInt(target.id.split('-')[1])

    if (cells[cellId].ticked === true) return

    const newCells = [...cells]

    newCells[cellId].ticked = true
    newCells[cellId].owner = currentPlayer

    setCells(newCells)
    setLatestCellClicked(cellId)
  }

  useEffect(() => {
    if (isNewGame(latestCellClicked)) return

    setCurrentPlayer(switchPlayer(currentPlayer))
    checkForWin(latestCellClicked, cells, rows, columns, currentPlayer)
  }, [cells])

  return {
    currentPlayer,
    cells,
    handleCellClick,
  }
}

export default useCells
