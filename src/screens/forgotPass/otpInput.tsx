import { StyleSheet, Text, View } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import OtpInputs from 'react-native-otp-inputs';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../theme/themecontext';
import { string } from '../../constants';
import { Button } from '../../components/button';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordStep2 } from '../auth/slice';

export const OtpInput = ({ setStep }: any) => {
  const forPassOTPSuccess = useSelector(
    (state: any) => state.auth.forPassOTPSuccess,
  );
  const dispatch = useDispatch();
  const { control, watch } = useFormContext();
  const { theme } = useContext(ThemeContext);
  const email = watch('email');
  const OTP = watch('otp');

  useEffect(() => {
    if (forPassOTPSuccess) {
      setStep(3);
    }
  }, [forPassOTPSuccess, setStep]);

  function handleStep2() {
    dispatch(
      forgotPasswordStep2({
        email,
        otp: OTP,
      }),
    );
  }

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

      <Button title="Send" handleBtn={handleStep2} />
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
    marginBottom: 30,
  },
});
