import { Controller, useFormContext } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
import { RHFTextInputStyles } from '../screens/styles';
import { ThemeContext } from '../theme/themecontext';
import { useContext } from 'react';

export const RHFTextInput = (props: any) => {
  const {theme}=useContext(ThemeContext);
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
              {backgroundColor:theme.input,color:theme.text,borderColor:theme.background},
              props.style,

              { borderColor: errors?.[props.name] ? 'red' : '' },
              props.multiline && { height: 120 },
            ]}
            value={value}
          />

          {errors?.[props.name] && (
            <View style={{ width: '80%' }}>
              <Text style={{ color: 'red' }}>
                {errors?.[props.name]?.message as string}
              </Text>
            </View>
          )}
        </View>
      )}
    />
  );
};
