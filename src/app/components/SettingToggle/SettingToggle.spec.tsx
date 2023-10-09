import { render } from '@testing-library/react'

import SettingToggle from './SettingToggle'

describe('SettingToggle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SettingToggle />)
    expect(baseElement).toBeTruthy()
  })
})
