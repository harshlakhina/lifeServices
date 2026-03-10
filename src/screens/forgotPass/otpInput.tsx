import { StyleSheet, Text, View } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import OtpInputs from 'react-native-otp-inputs';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/themecontext';
import { string } from '../../constants';

export const OtpInput = () => {
  const { control } = useFormContext();
  const { theme } = useContext(ThemeContext);
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>
        {string.forgotPassword.enterTheReceivedCode}
      </Text>
      <Controller
        control={control}
        name="otp"
        render={({ field: { onChange } }) => (
          <OtpInputs
            inputStyles={[
              Styles.otpInputs,
              {
                backgroundColor: theme.input,
                borderColor: theme.input,
                color: theme.text,
              },
            ]}
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

    borderRadius: 20,
    textAlign: 'center',
    marginHorizontal: 5,

    elevation: 10,
  },
});
