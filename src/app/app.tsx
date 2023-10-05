import GameGrid from 'src/app/components/GameGrid/GameGrid'
import { useCells } from 'src/app/hooks/useCells/useCells'
import {
  DEFAULT_COLUMN_COUNT,
  DEFAULT_ROW_COUNT,
  DEFAULT_WIN_REQUIRED_COUNT,
} from './constants'

export function App() {
  const {
    customRows,
    customRowsInput,
    customColumns,
    customColumnsInput,
    currentPlayer,
    cells,
    winCount,
    winCountInput,
    handleCellClick,
    handleCustomColumnsInputChange,
    handleCustomColumnsConfirmationClick,
    handleCustomRowsInputChange,
    handleCustomRowsConfirmationClick,
    handleWinCountInputChange,
    handleWinCountConfirmationClick,
  } = useCells(
    DEFAULT_ROW_COUNT,
    DEFAULT_COLUMN_COUNT,
    DEFAULT_WIN_REQUIRED_COUNT
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

          .cell .owned {
            border-width: 3px;
          }

          .cell.owned-by-1 {background-color: blue;}
          .cell.owned-by-2 {background-color: red;}

          .settings {
            margin-bottom: 20px;
            margin-right: 10px;
            border: 1px solid #000;
            width: 250px;
            padding: 10px;
            display: inline-block;
          }

          .settings p {
            margin-top: 0;
          }
        `}
      </style>
      <div className="settings">
        <h2>Winning</h2>
        <p>
          <label htmlFor="winCount">
            How many to win? (Set to <strong>{winCount}</strong>) :
          </label>
        </p>
        <input
          type="text"
          id="winCount"
          onChange={handleWinCountInputChange}
          value={winCountInput}
        />
        <button onClick={handleWinCountConfirmationClick}>Confirm</button>
      </div>
      <div className="settings">
        <h2>Rows</h2>
        <p>
          <label htmlFor="rowCount">
            How many rows? (Set to <strong>{customRows}</strong>) :
          </label>
        </p>
        <input
          type="text"
          id="rowCount"
          onChange={handleCustomRowsInputChange}
          value={customRowsInput}
        />
        <button onClick={handleCustomRowsConfirmationClick}>Confirm</button>
      </div>
      <div className="settings">
        <h2>Columns</h2>
        <p>
          <label htmlFor="columnCount">
            How many columns? (Set to <strong>{customColumns}</strong>) :
          </label>
        </p>
        <input
          type="text"
          id="columnCount"
          onChange={handleCustomColumnsInputChange}
          value={customColumnsInput}
        />
        <button onClick={handleCustomColumnsConfirmationClick}>Confirm</button>
      </div>
      <GameGrid
        cells={cells}
        columnCount={customColumns}
        handleCellClick={handleCellClick}
      />
      <p style={{ color: currentPlayer === 1 ? 'blue' : 'red' }}>
        Player {currentPlayer}'s turn
      </p>
    </>
  )
}

export default App
