import { StyleSheet, Text, View } from 'react-native';
import { Controller } from 'react-hook-form';
import OtpInputs from 'react-native-otp-inputs';

export const OtpInput = ({ control }: any) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Enter the received code</Text>
      <Controller
        control={control}
        name="otp"
        render={({ field: { onChange } }) => (
          <OtpInputs
            inputStyles={Styles.otpInputs}
            keyboardType="phone-pad"
            autofillFromClipboard={false}
            handleChange={onChange}
            numberOfInputs={4}
          />
        )}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 55,
    marginBottom: 25,
    gap: 15,
  },
  text: { color: '#66737F', fontSize: 20 },
  otpInputs: {
    height: 55,
    width: 55,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 20,
    textAlign: 'center',
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
    elevation: 10,
  },
});
