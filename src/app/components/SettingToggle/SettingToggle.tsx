export function SettingToggle({
  title,
  label,
  settingName,
  settingValue,
  handleClick,
}: SettingToggleProps) {
  return (
    <>
      <br />
      <div className="settings">
        <h2>{title}</h2>
        <p>
          <label htmlFor={settingName}></label>(Set to{' '}
          <strong>{settingValue ? 'on' : 'off'}</strong>)
        </p>

        <button onClick={handleClick}>
          {settingValue ? 'Disable' : 'Enable'}
        </button>
      </div>
    </>
  )
}

interface SettingToggleProps {
  title: string
  label: string
  settingName: string
  settingValue: boolean
  handleClick: any
}

export default SettingToggle
