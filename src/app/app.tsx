import GameGrid from 'src/app/components/GameGrid/GameGrid'
import { useCells } from 'src/app/hooks/useCells/useCells'

export function App() {
  const rowAndColumnCount = 4
  const { currentPlayer, cells, handleCellClick } = useCells(
    rowAndColumnCount,
    rowAndColumnCount
  )

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
        columnCount={rowAndColumnCount}
        handleCellClick={handleCellClick}
      />
      <p style={{ color: currentPlayer === 1 ? 'blue' : 'red' }}>
        Player {currentPlayer}'s turn
      </p>
    </>
  )
}

export default App
