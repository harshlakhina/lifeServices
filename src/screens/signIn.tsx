import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInSchema } from '../schema/signInSchema';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '../components/button';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themecontext';
import { RHFTextInput } from '../hookform/rhfTextInput';

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
          source={require('../assets/profile-logo.png')}
          style={Styles.profileLogoImage}
          resizeMode="contain"
        />

        <Text style={{ fontSize: 40 }}>
          <Text style={{ color: theme.text, fontWeight: 700 }}>Life</Text>
          <Text style={{ color: theme.text }}>Services</Text>
        </Text>

        <View style={Styles.inputContainer}>
          <RHFTextInput name="email" placeholder="E-Mail" />
          <RHFTextInput placeholder="Password" name="password" />
        </View>

        <View
          style={{ width: '80%', alignItems: 'flex-end', paddingBottom: 28 }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassWord')}
          >
            <Text style={{ color: '#3EAEFF', fontSize: 18 }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <Button title="Sign In " handleBtn={handleSubmit(onSubmit)} />

        <View style={{ alignItems: 'center', gap: 2, padding: 25 }}>
          <Text style={{ color: theme.text, fontSize: 22 }}>
            Don't have an account yet?
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ color: '#3EAEFF', fontSize: 21 }}>
              Create right now
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
