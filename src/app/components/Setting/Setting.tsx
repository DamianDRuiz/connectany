export function Setting({
  title,
  label,
  settingName,
  settingValue,
  settingValueInput,
  handleSettingInputChange,
  handleSettingConfirmationClick,
}: SettingProps) {
  return (
    <div className="settings">
      <h2>{title}</h2>
      <p>
        <label htmlFor={settingName}>
          {label} (Set to <strong>{settingValue}</strong>) :
        </label>
      </p>
      <input
        type="text"
        id={settingName}
        onChange={handleSettingInputChange}
        value={settingValueInput}
      />
      <button onClick={handleSettingConfirmationClick}>Confirm</button>
    </div>
  )
}

interface SettingProps {
  title: string
  label: string
  settingName: string
  settingValue: number
  settingValueInput: string | number
  handleSettingInputChange: any
  handleSettingConfirmationClick: any
}
