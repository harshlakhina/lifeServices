import { FormProvider, useForm } from 'react-hook-form';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Email } from '../email';
import { useContext, useState } from 'react';
import { ForgotPassWordStyles } from '../styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { ForgotPasswordSchema } from '../../schema/forgotPasswordSchema';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ThemeContext } from '../../theme/themecontext';
import Header2 from '../../components/header2';
import { imageSource, string } from '../../constants';
import { OtpInput } from './otpInput';
import { RHFTextInput } from '../../hookform/rhfTextInput';
import { Button } from '../../components/button';
import { useDispatch } from 'react-redux';
import { forgotPasswordStep3 } from '../auth/slice';

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const [step, setStep] = useState<number>(1);
  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues: {
      otp: '',
      email: '',
      new_password: '',
      confirm_new_password: '',
    },
  });

  const onSubmit = (data: any) => {
    dispatch(
      forgotPasswordStep3({
        new_password: data.new_password,
        email: data.email,
      }),
    );
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Header2 title="" />
      <KeyboardAwareScrollView
        contentContainerStyle={[
          ForgotPassWordStyles.container,
          { backgroundColor: theme.background2 },
          Styles.container,
        ]}
        enableOnAndroid={true}
        extraScrollHeight={50}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={imageSource.restorePasskey}
          style={ForgotPassWordStyles.logo}
          resizeMode="contain"
        />
        <View>
          <Text style={[ForgotPassWordStyles.logotext, { color: theme.text }]}>
            {' '}
            {string.forgotPassword.restore}
          </Text>
          <Text style={[ForgotPassWordStyles.logotext, { color: theme.text }]}>
            {string.forgotPassword.password}
          </Text>
        </View>

        {step === 1 && <Email />}
        {step === 2 && <OtpInput />}
        {step === 3 && (
          <View style={Styles.container1}>
            <Text style={Styles.text}>
              {string.forgotPassword.enterANewPass}
            </Text>

            <View style={Styles.inputContainer}>
              <RHFTextInput
                name="new_password"
                placeholder={string.forgotPassword.newPassword}
                secureTextEntry
              />
              <RHFTextInput
                name="confirm_new_password"
                placeholder={string.forgotPassword.confirmPassword}
                secureTextEntry
              />
            </View>

            <Button title="Save" handleBtn={methods.handleSubmit(onSubmit)} />
          </View>
        )}
      </KeyboardAwareScrollView>
    </FormProvider>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  container1: {
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
