import { View, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';

export const Email = ({ control }: any) => {
  return (
    <View style={Styles.container}>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              placeholder="Enter your E-mail"
              placeholderTextColor="#66737F"
              style={Styles.input}
              value={value}
              onChangeText={onChange}
            />
          </>
        )}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 65,
    marginBottom: 25,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 30,
    height: 58,
    paddingHorizontal: 20,
  },
});
