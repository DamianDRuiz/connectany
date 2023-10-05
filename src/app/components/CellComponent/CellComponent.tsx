import { Cell } from 'src/app/commonTypes/Cell'

interface CellProps extends Cell {
  cellId: number
  handleCellClick: any
}

export function CellComponent({
  cellId,
  x,
  y,
  ticked,
  owner,
  handleCellClick,
}: CellProps) {
  return (
    <div
      className={`cell ${ticked ? 'owned owned-by-' + owner : ''}`}
      id={`cell-${cellId}`}
      data-ticked={ticked}
      onClick={handleCellClick}
    >
      ({x}, {y}) - {ticked ? `Player ${owner}` : ''}
    </div>
  )
}

export default CellComponent
