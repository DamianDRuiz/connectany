import GameGrid from 'src/app/components/GameGrid/GameGrid'
import { Setting } from 'src/app/components/Setting/Setting'
import { useCells } from 'src/app/hooks/useCells/useCells'
import { Player } from './commonTypes/Player'
import {
  DEFAULT_COLUMN_COUNT,
  DEFAULT_ROW_COUNT,
  DEFAULT_WIN_REQUIRED_COUNT,
} from './constants'
import { styles } from './styles'

export function App() {
  const {
    currentPlayer,
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
  } = useCells(
    DEFAULT_ROW_COUNT,
    DEFAULT_COLUMN_COUNT,
    DEFAULT_WIN_REQUIRED_COUNT
  )

  return (
    <>
      <GlobalStyles styles={styles} />
      <Setting
        title="Winning"
        label="How many to win?"
        settingName={'winCount'}
        settingValue={winCount}
        settingValueInput={winCountInput}
        handleSettingInputChange={handleWinCountInputChange}
        handleSettingConfirmationClick={handleWinCountConfirmationClick}
      />
      <Setting
        title="Rows"
        label="How many rows?"
        settingName="rowCount"
        settingValue={customRows}
        settingValueInput={customRowsInput}
        handleSettingInputChange={handleCustomRowsInputChange}
        handleSettingConfirmationClick={handleCustomRowsConfirmationClick}
      />

      <Setting
        title="Columns"
        label="How many columns? "
        settingName="columnCount"
        settingValue={customColumns}
        settingValueInput={customColumnsInput}
        handleSettingInputChange={handleCustomColumnsInputChange}
        handleSettingConfirmationClick={handleCustomColumnsConfirmationClick}
      />
      <GravityMode
        gravityMode={gravityMode}
        handleGravityModeClick={handleGravityModeClick}
      />
      <GameBar currentPlayer={currentPlayer} />
      <GameGrid
        cells={cells}
        columnCount={customColumns}
        handleCellClick={handleCellClick}
      />
    </>
  )
}

function GameBar({ currentPlayer }: GameBarProps) {
  return (
    <p style={{ color: currentPlayer === 1 ? 'blue' : 'red' }}>
      <strong>Player {currentPlayer}'s turn</strong>
    </p>
  )
}

interface GameBarProps {
  currentPlayer: Player
}

function GravityMode({
  gravityMode,
  handleGravityModeClick,
}: GravityModeProps) {
  return (
    <>
      <br />
      <div className="settings">
        <h2>Gravity Mode</h2>
        <p>
          Gravity Mode? (Set to <strong>{gravityMode ? 'on' : 'off'}</strong>)
        </p>

        <button onClick={handleGravityModeClick}>
          {gravityMode ? 'Disable' : 'Enable'}
        </button>
      </div>
    </>
  )
}

interface GravityModeProps {
  gravityMode: boolean
  handleGravityModeClick: any
}

function GlobalStyles({ styles }: GlobalStylesProps) {
  return <style>{styles}</style>
}

interface GlobalStylesProps {
  styles: string
}

export default App
