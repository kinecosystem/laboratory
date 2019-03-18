import React from 'react';
import PositiveIntPicker from './PositiveIntPicker';

export default function SequencePicker(props) {
  let {value, onUpdate} = props;

  return <PositiveIntPicker
    value={value}
    placeholder='Amount in Quarks (1 kin = 100,000 Quarks)'
    onUpdate={(value) => onUpdate(value)}
    />
}
