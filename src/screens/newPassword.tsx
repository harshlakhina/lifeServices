import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';

export const NewPassWord = ({ control, errors }: any) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Enter a new password</Text>

      <View style={Styles.inputContainer}>
        <View style={Styles.inputChilConatiner}>
          <Controller
            control={control}
            name="newPassword"
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  placeholder="Enter new password"
                  secureTextEntry
                  style={[
                    Styles.input,
                    errors.newPassword && Styles.errorInput,
                  ]}
                  placeholderTextColor={errors.newPassword ? 'red' : '#66737F'}
                  value={value}
                  onChangeText={onChange}
                />
                {errors.newPassword && (
                   <Text style={[Styles.errorText]}>
                    {errors.newPassword.message}
                  </Text>
                )}
              </>
            )}
          />
        </View>

        <View style={Styles.inputChilConatiner}>
          <Controller
            control={control}
            name="confirmNewPassword"
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  placeholder="Confirm new password"
                  secureTextEntry
                  style={[
                    Styles.input,
                    errors.confirmNewPassword && Styles.errorInput,
                  ]}
                  placeholderTextColor={
                    errors.confirmNewPassword ? 'red' : '#66737F'
                  }
                  value={value}
                  onChangeText={onChange}
                />
                {errors.confirmNewPassword && (
                 <Text style={[Styles.errorText]}>
                    {errors.confirmNewPassword.message}
                  </Text>
                )}
              </>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 25,
    gap: 25,
  },
  text: { color: '#66737F', fontSize: 20 },
  inputContainer: { width: '100%', alignItems: 'center', gap: 20 },
  inputChilConatiner:{ width: '100%', alignItems: 'center', gap: 10 },
  input: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 30,
    height: 58,
    paddingHorizontal: 20,
    color:"black"
  },
  errorInput:{
                      borderWidth: 1,
                      borderColor: 'red',
                      color:"red"
                    },
  errorText: {
    color: 'red',
    fontSize: 15,
    width:"80%"
  },

});
