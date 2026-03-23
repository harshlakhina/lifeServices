import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInSchema } from '../../../schema/signInSchema';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useContext } from 'react';
import { Routes } from '../../../navigation';
import { imageSource, string } from '../../../constants';
import { ThemeContext } from '../../../theme/themecontext';
import { RHFTextInput } from '../../../hookform/rhfTextInput';
import { Button } from '../../../components/button';
import { Select } from '../../../hookform/select';
import { Role } from '../mock-data';
import { useNavigation } from '@react-navigation/native';
import { useLoginMutation } from '../../../redux/api/baseapi';
import { setUserCredentials } from '../../../redux/services/userServices';
import { LoginRequest } from '../type';
export default function SignIn() {
  const { theme } = useContext(ThemeContext);
  const [login, { isLoading, error }] = useLoginMutation();

  const navigation = useNavigation();

  const methods = useForm<LoginRequest>({
    resolver: yupResolver(SignInSchema),
    defaultValues: {
      role: '',
      email: '',
      password: '',
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: LoginRequest) => {
    try {
      const res = await login(data).unwrap();
      console.log('SIGNIN_RESPONSE--->', res);
      if (res.token) {
        setUserCredentials(res.token);
      }
    } catch (err) {
      console.log('SIGNIN_ERRROR---->', err);
    }
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
          <Select
            title={string.signIn.chooseYourRole}
            name="role"
            options={Role}
            multiple={false}
            style={Styles.inputWidth}
            wrapperStyle={Styles.selectCenter}
          />
          <RHFTextInput
            name="email"
            placeholder={string.signIn.email}
            style={Styles.inputWidth}
          />
          <RHFTextInput
            placeholder={string.signIn.password}
            name="password"
            style={Styles.inputWidth}
            secureTextEntry
          />

          {error ? (
            <Text style={Styles.errorText}>Something went wrong!</Text>
          ) : null}
        </View>

        <View style={Styles.forgotPassWordContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.ForgotPassword as never)}
          >
            <Text style={Styles.forgotPasswordText}>
              {string.signIn.forgotPassword}
            </Text>
          </TouchableOpacity>
        </View>

        <Button
          title={isLoading ? string.button.signInLoading : string.button.signIn}
          handleBtn={handleSubmit(onSubmit)}
          styleBtn={Styles.signInbtn}
          disabled={isLoading}
        />

        <View style={Styles.dontHaveAnAccountContainer}>
          <Text style={[Styles.dontHaveAnAccountText, { color: theme.text }]}>
            {string.signIn.dontHaveAnAccountYet}
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.SignUp as never)}
          >
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
  selectCenter: { alignItems: 'center' },
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
    textAlign: 'center',
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
