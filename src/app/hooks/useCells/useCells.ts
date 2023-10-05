import { ChangeEventHandler, useEffect, useState } from 'react'
import { Cell } from 'src/app/commonTypes/Cell'
import { buildGridCells } from 'src/app/utils/cells/buildGridCells'
import { checkForWin } from 'src/app/utils/gameControl/checkForWin'
import { isNewGame } from 'src/app/utils/gameControl/isNewGame'
import { switchPlayer } from 'src/app/utils/gameControl/switchPlayer'

export function useCells(rows: number, columns: number, wins: number) {
  const [currentPlayer, setCurrentPlayer] = useState<number>(1)
  const [winCount, setWinCount] = useState<number>(wins)
  const [customRows, setCustomRows] = useState<number>(rows)
  const [customColumns, setCustomColumns] = useState<number>(columns)
  const [winCountInput, setWinCountInput] = useState<string | number>(wins)
  const [customRowsInput, setCustomRowsInput] = useState<string | number>(rows)
  const [customColumnsInput, setCustomColumnsInput] = useState<string | number>(
    columns
  )

  const [cells, setCells] = useState<Cell[]>(buildGridCells(rows, columns))
  const [latestCellClicked, setLatestCellClicked] = useState<number | null>(
    null
  )

  const handleCustomRowsInputChange: ChangeEventHandler = (e) => {
    const target = <HTMLInputElement>e.target
    const value = target.value
    setCustomRowsInput(value)
  }

  const handleCustomRowsConfirmationClick = () => {
    const customRowsInputSanitized: number = parseInt(customRowsInput as string)
    if (Number.isInteger(customRowsInputSanitized))
      setCustomRows(customRowsInputSanitized as number)
  }

  const handleCustomColumnsInputChange: ChangeEventHandler = (e) => {
    const target = <HTMLInputElement>e.target
    const value = target.value
    setCustomColumnsInput(value)
  }

  const handleCustomColumnsConfirmationClick = () => {
    const customColumnsInputSanitized: number = parseInt(
      customColumnsInput as string
    )
    if (Number.isInteger(customColumnsInputSanitized))
      setCustomColumns(customColumnsInputSanitized as number)
  }

  const handleWinCountInputChange: ChangeEventHandler = (e) => {
    const target = <HTMLInputElement>e.target
    const value = target.value
    setWinCountInput(value)
  }

  const handleWinCountConfirmationClick = () => {
    const winCountInputSanitized: number = parseInt(winCountInput as string)
    if (Number.isInteger(winCountInputSanitized))
      setWinCount(winCountInputSanitized as number)
  }

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

    if (
      checkForWin(
        latestCellClicked,
        cells,
        rows,
        columns,
        currentPlayer,
        winCount
      )
    ) {
      setLatestCellClicked(null)
      setCells(buildGridCells(customRows, customColumns))
      setCurrentPlayer(1)
    }
  }, [cells])

  useEffect(() => {
    setCells(buildGridCells(customRows, customColumns))
  }, [customRows, customColumns])

  return {
    customRows,
    customRowsInput,
    customColumns,
    customColumnsInput,
    currentPlayer,
    cells,
    winCount,
    winCountInput,
    handleCustomRowsInputChange,
    handleCustomRowsConfirmationClick,
    handleCustomColumnsInputChange,
    handleCustomColumnsConfirmationClick,
    handleWinCountInputChange,
    handleWinCountConfirmationClick,
    handleCellClick,
  }
}

export default useCells
