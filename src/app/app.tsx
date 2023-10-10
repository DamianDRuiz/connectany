import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GameGrid from 'src/app/components/GameGrid/GameGrid'
import { Setting } from 'src/app/components/Setting/Setting'
import { useCells } from 'src/app/hooks/useCells/useCells'
import { GameBar } from './components/GameBar/GameBar'
import { GlobalStyles } from './components/GlobalStyle/GlobalStyles'
import SettingToggle from './components/SettingToggle/SettingToggle'
import {
  DEFAULT_COLUMN_COUNT,
  DEFAULT_ROW_COUNT,
  DEFAULT_WIN_REQUIRED_COUNT,
} from './constants'
import { styles } from './styles'
import { getDiagonalRowBoundaries } from './utils/winChecks/isDiagonalWinExp'
export function App() {
  const {
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
  } = useCells(
    DEFAULT_ROW_COUNT,
    DEFAULT_COLUMN_COUNT,
    DEFAULT_WIN_REQUIRED_COUNT
  )

  const settings = {
    winning: {
      title: 'Winning',
      label: 'How many to win?',
      settingName: 'winCount',
      settingValue: winCount,
      settingValueInput: winCountInput,
      handleSettingInputChange: handleWinCountInputChange,
      handleSettingConfirmationClick: handleWinCountConfirmationClick,
    },
    rows: {
      title: 'Rows',
      label: 'How many rows?',
      settingName: 'rowCount',
      settingValue: customRows,
      settingValueInput: customRowsInput,
      handleSettingInputChange: handleCustomRowsInputChange,
      handleSettingConfirmationClick: handleCustomRowsConfirmationClick,
    },
    columns: {
      title: 'Columns',
      label: 'How many columns? ',
      settingName: 'columnCount',
      settingValue: customColumns,
      settingValueInput: customColumnsInput,
      handleSettingInputChange: handleCustomColumnsInputChange,
      handleSettingConfirmationClick: handleCustomColumnsConfirmationClick,
    },
    gravityMode: {
      title: 'Gravity Mode',
      label: 'Gravity Mode?',
      settingName: 'gravityMode',
      settingValue: gravityMode,
      handleClick: handleGravityModeClick,
    },
  }

  const handleTestBoundsClick = () => {
    console.log(
      getDiagonalRowBoundaries(cells[latestCellClicked as number], cells)
    )
  }

  return (
    <>
      <GlobalStyles styles={styles} />
      <Setting {...settings.winning} />
      <Setting {...settings.rows} />
      <Setting {...settings.columns} />
      <SettingToggle {...settings.gravityMode} />
      <GameBar currentPlayer={currentPlayer} />
      <TestBounds onClick={handleTestBoundsClick} />
      <GameGrid
        cells={cells}
        columnCount={customColumns}
        handleCellClick={handleCellClick}
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </>
  )
}

function TestBounds({ onClick }: TestBoundsProps) {
  return <button onClick={onClick}>Test Bounds</button>
}

interface TestBoundsProps {
  onClick: any
}

export default App
