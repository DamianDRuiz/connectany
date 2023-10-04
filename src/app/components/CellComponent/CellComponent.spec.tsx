import { render } from '@testing-library/react'

import CellComponent from './CellComponent'

describe('CellComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CellComponent />)
    expect(baseElement).toBeTruthy()
  })
})
