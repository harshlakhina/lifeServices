import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function RHFRadio({ name }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={() => (
        <TouchableOpacity style={styles.container}>
         {/* <Image/> */}
        </TouchableOpacity>
      )}
    />
  );
}

export default RHFRadio;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
});
