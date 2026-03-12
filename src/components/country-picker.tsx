import React, { useState, useContext } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';
import { Controller, useFormContext } from 'react-hook-form';
import { ThemeContext } from '../theme/themecontext';

type Props = {
  phoneName: string;
  countryName: string;
};

export default function PhoneInput({ phoneName, countryName }: Props) {
  const { theme } = useContext(ThemeContext);
  const { control, setValue } = useFormContext();

  const [country, setCountry] = useState<Country | null>(null);
  const [number, setNumber] = useState('');

  return (
    <View style={{ width: '100%' }}>
      <View style={[styles.container, { backgroundColor: theme.input }]}>
        {/* Country Picker */}
        <Controller
          control={control}
          name={countryName}
          render={() => (
            <CountryPicker
              withFilter
              withFlag
              withCallingCode
              countryCode={(country?.cca2 as CountryCode) || 'IN'}
              onSelect={c => {
                setCountry(c);
                setValue(countryName, c.cca2); // store country code
              }}
            />
          )}
        />

        {/* Phone Input */}
        <Controller
          control={control}
          name={phoneName}
          render={({ field: { onChange } }) => (
            <View style={styles.inputRow}>
              <Text style={styles.prefix}>
                {country?.callingCode ? `+${country.callingCode[0]}` : '+91'}
              </Text>
              <TextInput
                placeholder="Phone Number"
                keyboardType="number-pad"
                style={[styles.input, { color: theme.text }]}
                value={number}
                onChangeText={text => {
                  setNumber(text);
                  onChange(text);
                }}
              />
            </View>
          )}
        />
      </View>

      <View style={{ marginLeft: 15 }}>
        <Controller
          control={control}
          name={phoneName}
          render={({ fieldState: { error } }) => (
            <Text style={{ color: 'red', marginTop: 5 }}>
              {error ? error.message : ' '}
            </Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    height: 60,
    paddingHorizontal: 10,
    width: '100%',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1,
  },
  prefix: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#555',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
