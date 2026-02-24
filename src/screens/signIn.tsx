import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInSchema } from '../schema/signInSchema';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '../components/button';

interface SignInFormData {
  email: string;
  password: string;
}

export default function SignIn({ navigation }: any) {
  const methods = useForm<SignInFormData>({
    // resolver: yupResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
    navigation.navigate('Home-screen');
  };

  return (
    <FormProvider {...methods}>
      <KeyboardAwareScrollView
        contentContainerStyle={Styles.container}
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
          <Text style={{ color: '#141414', fontWeight: 700 }}>Life</Text>
          <Text style={{ color: '#141414' }}>Services</Text>
        </Text>

        <View style={Styles.inputContainer}>
          <View style={{ width: '100%', alignItems: 'center', gap: 5 }}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoComplete="email"
                    placeholderTextColor={errors.email ? 'red' : '#66737F'}
                    style={[
                      Styles.input,
                      errors.email
                        ? { color: 'red', borderWidth: 1, borderColor: 'red' }
                        : {},
                    ]}
                    value={value}
                    onChangeText={onChange}
                  />
                  {errors.email && (
                    <Text style={Styles.errorText}>{errors.email.message}</Text>
                  )}
                </>
              )}
            />
          </View>

          <View style={{ width: '100%', alignItems: 'center', gap: 5 }}>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={errors.password ? 'red' : '#66737F'}
                    style={[
                      Styles.input,
                      errors.password
                        ? { color: 'red', borderWidth: 1, borderColor: 'red' }
                        : { color: 'black' },
                    ]}
                    value={value}
                    secureTextEntry
                    onChangeText={onChange}
                  />

                  {errors.password && (
                    <Text style={Styles.errorText}>
                      {errors.password.message}
                    </Text>
                  )}
                </>
              )}
            />
          </View>
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
          <Text style={{ color: '#141414', fontSize: 22 }}>
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
    backgroundColor: '#F5F6F9',
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
