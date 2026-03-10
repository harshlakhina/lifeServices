import { Text, View, StyleSheet } from 'react-native';
import { RHFTextInput } from '../../hookform/rhfTextInput';
import { string } from '../../constants';

export const NewPassWord = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>{string.forgotPassword.enterANewPass}</Text>

      <View style={Styles.inputContainer}>
        <RHFTextInput name="newPassword" placeholder={string.forgotPassword.newPassword}  secureTextEntry />
        <RHFTextInput
          name="confirmNewPassword"
          placeholder={string.forgotPassword.confirmPassword}
          secureTextEntry
        />
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
  inputChilConatiner: { width: '100%', alignItems: 'center', gap: 10 },
  input: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 30,
    height: 58,
    paddingHorizontal: 20,
    color: 'black',
  },
  errorInput: {
    borderWidth: 1,
    borderColor: 'red',
    color: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 15,
    width: '80%',
  },
});
