import { FormProvider, useForm } from 'react-hook-form';
import { Image, Text, View } from 'react-native';
import { NewPassWord } from './newPassword';
import { Email } from './email';
import { OtpInput } from './otpInput';
import { useState } from 'react';
import { Button } from '../components/button';
import { ForgotPassWordStyles } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { ForgotPasswordSchema } from '../schema/forgotPasswordSchema';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const ForgotPassword = ({ navigation }: any) => {
  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues:{
      newPassword:"",
      confirmNewPassword:""
    }
  });
  const [step, setStep] = useState<number>(1);
  const {
    control,
    handleSubmit,
    formState: { errors },
    
  } = methods;

  // const NewPassword=watch("newPassword");
  //  const ConfirmNewPassword=watch("confirmNewPassword");

  function handleStep() {
    setStep(prev => prev + 1);
  }

  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate('Home');
  };

  return (
    <FormProvider {...methods}>
      <KeyboardAwareScrollView
        contentContainerStyle={ForgotPassWordStyles.container}
        enableOnAndroid={true}
        extraScrollHeight={50}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require('../assets/restore-password-key.png')}
          style={ForgotPassWordStyles.logo}
          resizeMode="contain"
        />
        <View>
          <Text style={ForgotPassWordStyles.logotext}> Restore</Text>
          <Text style={ForgotPassWordStyles.logotext}>password</Text>
        </View>

        {step === 1 && <Email control={control} />}
        {step === 2 && <OtpInput control={control} />}
        {step === 3 && <NewPassWord control={control} errors={errors} />}

        <Button
          handleBtn={step === 3 ? handleSubmit(onSubmit) : handleStep}
          title={step === 3 ? 'Save' : 'Send'}
        />
      </KeyboardAwareScrollView>
    </FormProvider>
  );
};
