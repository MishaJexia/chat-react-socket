import React from 'react'

import { useLocal } from '../../effects/useLocal'

export interface SelectSettingOption {
  value: string;
  text: string;
}
export interface SelectSettingProps{
  storageKey: string;
  label: string;
  onChange?: (value: string)=> void;
  options: SelectSettingOption[];
}

const SelectSetting: React.FunctionComponent<SelectSettingProps> = ({ label, storageKey, options, onChange }) => {
  const [settingValue, updateValue] = useLocal.bind(this)(storageKey)
  const updateSetting = (inputValue: string) => {
    updateValue(inputValue)
    if (onChange)onChange(inputValue)
  }

  return (
    <div className='SelectSetting'>
      <label htmlFor={storageKey}>{label}</label>
      <select name={storageKey} value={settingValue} onChange={event => updateSetting(event.currentTarget.value)}>
        {options.map(({ value, text }, i) => (
          <option key={i} value={value}>{text}</option>))}
      </select>
    </div>
  )
}

export default SelectSetting