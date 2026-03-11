import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { SignInSchema } from '../schema/signInSchema';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '../components/button';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themecontext';
import { RHFTextInput } from '../hookform/rhfTextInput';
import { imageSource, string } from '../constants';
import { Routes } from '../navigation';

interface SignInFormData {
  email: string;
  password: string;
}

export default function SignIn({ navigation }: any) {
  const { theme } = useContext(ThemeContext);

  const methods = useForm<SignInFormData>({
    // resolver: yupResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
    navigation.navigate('Home-screen');
  };

  return (
    <FormProvider {...methods}>
      <KeyboardAwareScrollView
        contentContainerStyle={[
          Styles.container,
          { backgroundColor: theme.background2 },
        ]}
        enableOnAndroid={true}
        extraScrollHeight={50}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={imageSource.profileLogo}
          style={Styles.profileLogoImage}
          resizeMode="contain"
        />
        <Text style={[Styles.text, { color: theme.text }]}>
          <Text style={Styles.textLife}>{string.auth.life}</Text>{' '}
          {string.auth.services}
        </Text>

        <View style={Styles.inputContainer}>
          <RHFTextInput
            name="email"
            placeholder={string.signIn.email}
            style={Styles.inputWidth}
          />
          <RHFTextInput
            placeholder={string.signIn.password}
            name="password"
            style={Styles.inputWidth}
          />
        </View>

        <View style={Styles.forgotPassWordContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.ForgotPassword)}
          >
            <Text style={Styles.forgotPasswordText}>
              {string.signIn.forgotPassword}
            </Text>
          </TouchableOpacity>
        </View>

        <Button
          title={string.button.signIn}
          handleBtn={handleSubmit(onSubmit)}
          styleBtn={Styles.signInbtn}
        />

        <View style={Styles.dontHaveAnAccountContainer}>
          <Text style={[Styles.dontHaveAnAccountText, { color: theme.text }]}>
            {string.signIn.dontHaveAnAccountYet}
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate(Routes.SignUp)}>
            <Text style={Styles.createRightNotBtn}>
              {string.signIn.createRightNow}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </FormProvider>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 150,
    alignItems: 'center',
  },
  profileLogoImage: {
    height: 100,
  },
  inputContainer: {
    width: '100%',
    gap: 25,
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 20,
    padding: 25,
  },

  inputWidth: { width: '100%' },
  forgotPassWordContainer: {
    width: '80%',
    alignItems: 'flex-end',
    paddingBottom: 28,
  },
  forgotPasswordText: { color: '#3EAEFF', fontSize: 18 },
  signInbtn: {
    width: '89%',
  },
  btnText: { color: '#FFFFFF', fontWeight: 700, fontSize: 18 },
  errorText: {
    color: 'red',
    fontSize: 15,
    width: '80%',
  },
  text: {
    fontSize: 37,
  },
  textLife: { fontWeight: 'bold' },
  dontHaveAnAccountContainer: { alignItems: 'center', gap: 2, padding: 25 },
  dontHaveAnAccountText: {
    fontSize: 23,
  },
  createRightNotBtn: { color: '#3EAEFF', fontSize: 21 },
});
