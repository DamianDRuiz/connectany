import { Cell } from 'src/app/commonTypes/Cell'
import CellComponent from 'src/app/components/CellComponent/CellComponent'
import { DEFAULT_COLUMN_COUNT } from 'src/app/constants'

interface GameGridProps {
  cells: Cell[]
  columnCount: number
  handleCellClick: any
}

export function GameGrid({
  cells,
  columnCount = DEFAULT_COLUMN_COUNT,
  handleCellClick,
}: GameGridProps) {
  return (
    <div
      className="gamegrid"
      style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
    >
      {cells.map((cell: Cell, index) => (
        <CellComponent
          key={index}
          cellId={index}
          x={cell.x}
          y={cell.y}
          ticked={cell.ticked}
          owner={cell.owner}
          handleCellClick={handleCellClick}
        />
      ))}
    </div>
  )
}

export default GameGrid
