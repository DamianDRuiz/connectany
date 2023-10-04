import GameGrid from 'src/app/components/GameGrid/GameGrid'
import { DEFAULT_COLUMN_COUNT } from 'src/app/constants'
import { useCells } from 'src/app/hooks/useCells/useCells'

export function App() {
  const { currentPlayer, cells, handleCellClick } = useCells()

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
