import { ChangeEventHandler, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Cell } from 'src/app/commonTypes/Cell'
import { buildGridCells } from 'src/app/utils/cells/buildGridCells'
import getCellID from 'src/app/utils/cells/getCellID'
import { getHighestEmptyCellInColumn } from 'src/app/utils/cells/getHighestEmptyCellInColumn'
import { checkForWin } from 'src/app/utils/gameControl/checkForWin'
import { isNewGame } from 'src/app/utils/gameControl/isNewGame'
import { switchPlayer } from 'src/app/utils/gameControl/switchPlayer'
import { Player } from '../../commonTypes/Player'

export function useCells(rows: number, columns: number, wins: number) {
  const [currentPlayer, setCurrentPlayer] = useState<Player>(1)
  const [cells, setCells] = useState<Cell[]>(buildGridCells(rows, columns))
  const [gravityMode, setGravityMode] = useState<boolean>(false)
  const [winCount, setWinCount] = useState<number>(wins)
  const [customRows, setCustomRows] = useState<number>(rows)
  const [customColumns, setCustomColumns] = useState<number>(columns)
  const [winCountInput, setWinCountInput] = useState<string | number>(wins)
  const [customRowsInput, setCustomRowsInput] = useState<string | number>(rows)
  const [customColumnsInput, setCustomColumnsInput] = useState<string | number>(
    columns
  )
  const [latestCellClicked, setLatestCellClicked] = useState<number | null>(
    null
  )

  const manageGame = () => {
    if (isNewGame(latestCellClicked)) return

    setCurrentPlayer(switchPlayer(currentPlayer))

    if (checkForWin(latestCellClicked, cells, currentPlayer, winCount)) {
      toast(`Player ${currentPlayer} wins!`)
      setLatestCellClicked(null)
      setCells(buildGridCells(customRows, customColumns))
      setCurrentPlayer(1)
    }
  }

  const manageGrid = () => {
    setCells(buildGridCells(customRows, customColumns))
  }

  useEffect(manageGame, [cells])

  useEffect(manageGrid, [customRows, customColumns])

  const handleCellClick = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement
    const cellId: number = parseInt(target.id.split('-')[1])

    if (cells[cellId].ticked === true) return

    const newCells = [...cells]
    let clickedCell = cells[cellId]

    if (gravityMode)
      clickedCell = getHighestEmptyCellInColumn(clickedCell, cells)

    clickedCell.ticked = true
    clickedCell.owner = currentPlayer
    setCells(newCells)
    setLatestCellClicked(getCellID(clickedCell, cells)) //here
  }

  const handleGravityModeClick = () => {
    setGravityMode((prev) => !prev)
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

  return {
    currentPlayer,
    latestCellClicked,
    cells,
    handleCellClick,
    gravityMode,
    handleGravityModeClick,
    winCount,
    winCountInput,
    handleWinCountInputChange,
    handleWinCountConfirmationClick,
    customRows,
    customRowsInput,
    handleCustomRowsInputChange,
    handleCustomRowsConfirmationClick,
    customColumns,
    customColumnsInput,
    handleCustomColumnsInputChange,
    handleCustomColumnsConfirmationClick,
  }
}

export default useCells
