import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInSchema } from '../schema/signInSchema';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '../components/button';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themecontext';
import { RHFTextInput } from '../hookform/rhfTextInput';
import { imageSource, string } from '../constants';

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

        <Text style={{ fontSize: 37, color: theme.text }}>
          <Text style={{ fontWeight: 'bold' }}>{string.auth.life}</Text>{' '}
          {string.auth.services}
        </Text>

        <View style={Styles.inputContainer}>
          <RHFTextInput
            name="email"
            placeholder={string.signIn.email}
            style={{ width: '100%' }}
          />
          <RHFTextInput
            placeholder={string.signIn.password}
            name="password"
            style={{ width: '100%' }}
          />
        </View>

        <View
          style={{ width: '80%', alignItems: 'flex-end', paddingBottom: 28 }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassWord')}
          >
            <Text style={{ color: '#3EAEFF', fontSize: 18 }}>
              {string.signIn.forgotPassword}
            </Text>
          </TouchableOpacity>
        </View>

        <Button
          title={string.button.signIn}
          handleBtn={handleSubmit(onSubmit)}
          styleBtn={{ width: '89%' }}
        />

        <View style={{ alignItems: 'center', gap: 2, padding: 25 }}>
          <Text style={{ color: theme.text, fontSize: 22 }}>
            {string.signIn.dontHaveAnAccountYet}
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ color: '#3EAEFF', fontSize: 21 }}>
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
  input: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 30,
    height: 55,
    paddingHorizontal: 20,
  },

  signInbtn: {
    backgroundColor: '#02D1AC',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '6%',
  },
  btnText: { color: '#FFFFFF', fontWeight: 700, fontSize: 18 },
  errorText: {
    color: 'red',
    fontSize: 15,
    width: '80%',
  },
});
