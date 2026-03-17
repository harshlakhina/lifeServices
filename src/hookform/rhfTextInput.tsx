import { Controller, useFormContext } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { RHFTextInputStyles } from '../screens/styles';
import { ThemeContext } from '../theme/themecontext';
import { useContext } from 'react';

export const RHFTextInput = (props: any) => {
  const { theme } = useContext(ThemeContext);
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, value } }) => (
        <View style={RHFTextInputStyles.container}>
          <TextInput
            {...props}
            placeholder={props.placeholder}
            textAlignVertical={props.multiline ? 'top' : 'center'}
            placeholderTextColor={errors?.[props.name] ? 'red' : '#66737F'}
            onChangeText={onChange}
            style={[
              RHFTextInputStyles.input,
              {
                backgroundColor: theme.input,
                color: theme.text,
                borderColor: theme.background,
              },
              props.style,

              { borderColor: errors?.[props.name] ? 'red' : theme.background },
              props.multiline && Styles.multine,
            ]}
            value={value}
          />

          {errors?.[props.name] && (
            <View style={Styles.errorWidth}>
              <Text style={Styles.error}>
                {errors?.[props.name]?.message as string}
              </Text>
            </View>
          )}
        </View>
      )}
    />
  );
};

const Styles = StyleSheet.create({
  error: {
    color: 'red',
  },
  errorWidth: { width: '90%' },
  multine: { height: 120 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
  },

  inputError: {
    borderColor: 'red',
  },
});
