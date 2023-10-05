import GameGrid from 'src/app/components/GameGrid/GameGrid'
import { useCells } from 'src/app/hooks/useCells/useCells'
import { DEFAULT_COLUMN_COUNT } from './constants'

export function App() {
  const {
    currentPlayer,
    cells,
    winCount,
    winCountInput,
    handleCellClick,
    handleWinCountInputChange,
    handleWinCountConfirmationClick,
  } = useCells()

  return (
    <>
      <style>
        {`
          .gamegrid {
            display: grid;
            width: 600px;
            height: 600px;
          }

          .cell {
            border: 1px solid #000;
          }
        `}
      </style>
      <input
        type="text"
        id="winCount"
        onChange={handleWinCountInputChange}
        value={winCountInput}
      />
      <button onClick={handleWinCountConfirmationClick}>Confirm</button>
      {winCount}
      <GameGrid
        cells={cells}
        columnCount={DEFAULT_COLUMN_COUNT}
        handleCellClick={handleCellClick}
      />
      <p style={{ color: currentPlayer === 1 ? 'blue' : 'red' }}>
        Player {currentPlayer}'s turn
      </p>
    </>
  )
}

export default App
