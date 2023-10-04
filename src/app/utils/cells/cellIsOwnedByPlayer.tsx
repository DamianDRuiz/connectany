import { Cell } from 'src/app/commonTypes/Cell'

export function cellIsOwnedByPlayer(cell: Cell, player: number) {
  return cell.ticked && cell.owner == player
}
