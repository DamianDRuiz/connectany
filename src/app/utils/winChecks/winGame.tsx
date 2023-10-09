import { toast } from 'react-toastify'

export function winGame(direction: string = '', player: string = 'Player 1') {
  toast(`${player} wins - ${direction} Pattern! `)
}
