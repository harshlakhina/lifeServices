import { Controller, useFormContext } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
import { RHFTextInputStyles } from '../screens/styles';

export const RHFTextInput = (props: any) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, value } }) => (
        <View style={{ width: '100%', alignItems: 'center', gap: 10 }}>
          <TextInput
            {...props}
            placeholder={props.placeholder}
            
            placeholderTextColor={errors?.[props.name] ? 'red' : '#66737F'}
            onChangeText={onChange}
            style={[
              RHFTextInputStyles.input,
              props.style,
              { borderWidth: 1 },
              { borderColor: errors?.[props.name] ? 'red' : '#FFF' },
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
