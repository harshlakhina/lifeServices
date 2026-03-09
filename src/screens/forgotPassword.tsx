import { FormProvider, useForm } from 'react-hook-form';
import { Image, Text, View } from 'react-native';
import { NewPassWord } from './newPassword';
import { Email } from './email';
import { OtpInput } from './otpInput';
import { useContext, useState } from 'react';
import { Button } from '../components/button';
import { ForgotPassWordStyles } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { ForgotPasswordSchema } from '../schema/forgotPasswordSchema';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ThemeContext } from '../theme/themecontext';
import Header2 from '../components/header2';
import { imageSource } from '../constants';

export const ForgotPassword = ({ navigation }: any) => {
  const { theme } = useContext(ThemeContext);
  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues: {
      newPassword: '',
      confirmNewPassword: '',
    },
  });
  const [step, setStep] = useState<number>(1);
  const { handleSubmit } = methods;

  function handleStep() {
    setStep(prev => prev + 1);
  }

  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate('Home-screen');
  };

  return (
    <FormProvider {...methods}>
      <Header2 title="" />
      <KeyboardAwareScrollView
        contentContainerStyle={[
          ForgotPassWordStyles.container,
          { backgroundColor: theme.background2, flexGrow: 1 },
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
            Restore
          </Text>
          <Text style={[ForgotPassWordStyles.logotext, { color: theme.text }]}>
            password
          </Text>
        </View>

        {step === 1 && <Email />}
        {step === 2 && <OtpInput />}
        {step === 3 && <NewPassWord />}

        <Button
          handleBtn={step === 3 ? handleSubmit(onSubmit) : handleStep}
          title={step === 3 ? 'Save' : 'Send'}
        />
      </KeyboardAwareScrollView>
    </FormProvider>
  );
};
