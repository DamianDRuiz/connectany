import { render } from '@testing-library/react'

import Setting from './Setting'

describe('Setting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Setting />)
    expect(baseElement).toBeTruthy()
  })
})
