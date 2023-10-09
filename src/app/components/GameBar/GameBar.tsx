import { Player } from '../../commonTypes/Player'

export function GameBar({ currentPlayer }: GameBarProps) {
  return (
    <p style={{ color: currentPlayer === 1 ? 'blue' : 'red' }}>
      <strong>Player {currentPlayer}'s turn</strong>
    </p>
  )
}
interface GameBarProps {
  currentPlayer: Player
}
