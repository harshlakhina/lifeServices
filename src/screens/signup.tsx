import { FormProvider, useForm } from 'react-hook-form';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Select } from '../hookform/select';
import { professions } from '../constants/profession';
import { countries } from '../constants/countries';
import { cities } from '../constants/cities';
import { useContext, useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RHFTextInput } from '../hookform/rhfTextInput';
import { Button } from '../components/button';
import { SignUpStyles } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpSchema } from '../schema/SignUpSchema';
import { SelectDropStyles } from '../screens/styles';
import { ThemeContext } from '../theme/themecontext';

export default function SignUp({ navigation }: any) {
  const { theme } = useContext(ThemeContext);
  const methods = useForm({
    resolver: yupResolver(SignUpSchema),
  });
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [image, setImage] = useState<string | null>(null);

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        if (response.assets && response.assets.length > 0) {
          setImage(response.assets[0].uri || null);
        }
      },
    );
  };

  const { handleSubmit } = methods;
  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate('Home');
  };

  return (
    <FormProvider {...methods}>
      <View
        style={[
          SignUpStyles.profileImageWrapper,
          { backgroundColor: theme.background },
        ]}
      >
        <Image
          source={require('../assets/profile-logo.png')}
          style={SignUpStyles.profileLogoImage}
          resizeMode="contain"
        />

        <Text>
          <Text
            style={[
              SignUpStyles.lifeSevicesText,
              { fontWeight: 700, color: theme.text },
            ]}
          >
            Life
          </Text>
          <Text style={[SignUpStyles.lifeSevicesText, { color: theme.text }]}>
            Services
          </Text>
        </Text>
      </View>

      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraScrollHeight={50}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ backgroundColor: theme.background }}
      >
        {!image ? (
          <TouchableOpacity
            style={{ alignItems: 'center', paddingTop: 20, gap: 15 }}
          >
            <View>
              <TouchableOpacity
              onPress={pickImage}
                style={{
                  backgroundColor: theme.input,
                  height: 120,
                  width: 120,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 2,
                }}
              >
                <Image
                  source={require('../assets/imageLogo.png')}
                  style={{ height: 55, width: 55, tintColor: theme.bottomTab }}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <View
                style={{
                  position: 'absolute',
                  right: -8,
                  top: -13,
                  backgroundColor: '#07C0E0',
                  height: 35,
                  width: 35,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MaterialCommunityIcons
                  name="plus"
                  size={24}
                  color={theme.background}
                />
              </View>
            </View>
            <Text style={{ color: '#07C0E0', fontSize: 20 }}>
              Add your photo
            </Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              position: 'relative',
            }}
          >
            <View
              style={{
                width: '100%',
                paddingHorizontal: 30,
                alignItems: 'center',
              }}
            >
              <Image
                source={{ uri: image }}
                style={{ height: 350, width: '100%', borderRadius: 25 }}
                resizeMode="cover"
              />
            </View>

            <View
              style={{
                position: 'absolute',
                alignSelf: 'center',
                bottom: 18,
                backgroundColor: '#07C0E0',
                paddingHorizontal: 30,
                paddingVertical: 16,
                borderRadius: 35,
              }}
            >
              <TouchableOpacity onPress={pickImage}>
                <Text style={{ color: '#FFF' }}>Change Photo</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View style={SignUpStyles.inputWrapper}>
          <RHFTextInput placeholder="Name" name="name" />

          <Select
            title="Choose your profession"
            options={professions}
            name="profession"
            style={[SelectDropStyles.input, SelectDropStyles.extraInputItem]}
            wrapperStyle={{ alignItems: 'center' }}
            selected={true}
          />
          <Select
            title="Choose a country"
            options={countries}
            name="country"
            style={[SelectDropStyles.input, SelectDropStyles.extraInputItem]}
            wrapperStyle={{ alignItems: 'center' }}
            selected={true}
          />

          <Select
            title="Choose your City"
            options={cities}
            name="city"
            style={[SelectDropStyles.input, SelectDropStyles.extraInputItem]}
            wrapperStyle={{ alignItems: 'center' }}
            selected={true}
          />

          <RHFTextInput placeholder="Enter your Address" name="address" />
          <RHFTextInput
            placeholder="Your phone number"
            name="phoneNo"
            keyboardType="number-pad"
            style={{ width: '80%' }}
          />

          <View style={{ width: '80%', gap: 20 }}>
            {!isPhone ? (
              <TouchableOpacity
                onPress={() => setIsPhone(true)}
                style={{ flexDirection: 'row', gap: 10, paddingLeft: 15 }}
              >
                <MaterialCommunityIcons name="plus" size={24} color="#07C0E0" />
                <Text style={{ color: '#07C0E0', fontSize: 18 }}>
                  Add phone number
                </Text>
              </TouchableOpacity>
            ) : (
              <RHFTextInput
                placeholder="Your phone number"
                name="phoneNo1"
                keyboardType="number-pad"
                style={{ width: '100%' }}
              />
            )}
          </View>

          <RHFTextInput placeholder="Email" name="email" />
          <RHFTextInput
            placeholder="Password"
            name="password"
            secureTextEntry
          />
          <RHFTextInput
            placeholder=" Confirm Password"
            name="confirmPassword"
            secureTextEntry
          />
          <Button title="Sign Up" handleBtn={handleSubmit(onSubmit)} />

          <View style={{ flexDirection: 'row', gap: 8, marginBottom: 30 }}>
            <Text style={{ fontSize: 18, color: theme.text }}>
              Do you already have an account?
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={SignUpStyles.signIn}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </FormProvider>
  );
}
