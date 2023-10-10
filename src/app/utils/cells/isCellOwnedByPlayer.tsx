import { Cell } from 'src/app/commonTypes/Cell'

export function isCellOwnedByPlayer(cell: Cell, player: number) {
  return cell.ticked && cell.owner == player
}
