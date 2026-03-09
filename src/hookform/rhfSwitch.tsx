import React from 'react';
import { View, Switch } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  handleRadioBtn: (name: string,) => void;
};
function RHFSwitch({ name, handleRadioBtn }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <View>
          <Switch
            value={value}
            onValueChange={val => {
              onChange(val);
              handleRadioBtn(name);
            }}
            trackColor={{ false: '#F5F6F9', true: '#07C0E0' }}
          />
        </View>
      )}
    />
  );
}

export default RHFSwitch;
