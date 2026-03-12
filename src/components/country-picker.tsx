import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';
import { Controller, useFormContext } from 'react-hook-form';
import { ThemeContext } from '../theme/themecontext';

export default function CountryPickerModal() {
  const { theme } = useContext(ThemeContext);
  const { control } = useFormContext();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <View style={Styles.container}>
      <Controller
        control={control}
        name="country"
        defaultValue=""
        render={({ field: { onChange } }) => (
          <View style={[{ backgroundColor: theme.input }, Styles.picker]}>
            <CountryPicker
              withFilter
              withFlag
              withCallingCode
              withEmoji
              countryCode={(selectedCountry?.cca2 as CountryCode) || 'IN'}
              onSelect={(country: Country) => {
                setSelectedCountry(country);
                onChange(country.name);
              }}
            />

            <Text style={Styles.text}>
              {selectedCountry
                ? `${selectedCountry.name} ( +${selectedCountry.callingCode[0]})`
                : 'Select Country'}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  picker: {
    flexDirection: 'row',
    borderRadius: 30,
    paddingHorizontal: 17,
    alignItems: 'center',
    height: 60,
  },
  text: { marginLeft: 10, color: '#8F9CA9' },
});
