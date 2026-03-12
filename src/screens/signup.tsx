import { FormProvider, useForm } from 'react-hook-form';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Select } from '../hookform/select';
import { professions } from '../constants/profession';
import { cities } from '../constants/cities';
import { useContext, useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RHFTextInput } from '../hookform/rhfTextInput';
import { Button } from '../components/button';
import { SignUpStyles } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpSchema } from '../schema/SignUpSchema';
import { ThemeContext } from '../theme/themecontext';
import { iconSource, imageSource, string } from '../constants';
import PhoneInput from '../components/country-picker';

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
      <View style={{ backgroundColor: theme.background, flex: 1 }}>
        <View style={[SignUpStyles.profileImageWrapper]}>
          <Image
            source={imageSource.profileLogo}
            style={SignUpStyles.profileLogoImage}
            resizeMode="contain"
          />

          <Text style={[{ color: theme.text }, SignUpStyles.text]}>
            <Text style={SignUpStyles.textLife}>{string.auth.life}</Text>{' '}
            {string.auth.services}
          </Text>
        </View>

        <KeyboardAwareScrollView
          enableOnAndroid={true}
          extraScrollHeight={150}
          keyboardShouldPersistTaps="handled"
        >
          {!image ? (
            <TouchableOpacity style={SignUpStyles.profileDemoContainer}>
              <View>
                <TouchableOpacity
                  onPress={pickImage}
                  style={[
                    { backgroundColor: theme.input },
                    SignUpStyles.profileDemoImageContainer,
                  ]}
                >
                  <Image
                    source={iconSource.profileWhiteColor}
                    style={[
                      { tintColor: theme.bottomTab },
                      SignUpStyles.profileDemoImage,
                    ]}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <View style={SignUpStyles.profileDemoPlusContainer}>
                  <MaterialCommunityIcons
                    name="plus"
                    size={24}
                    color={theme.background}
                  />
                </View>
              </View>
              <Text style={SignUpStyles.addYourPhotoText}>
                {string.signUp.addYourPhoto}
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={SignUpStyles.selectedImageMainContainer}>
              <View style={SignUpStyles.selectedImageContainer}>
                <Image
                  source={{ uri: image }}
                  style={SignUpStyles.selectedImage}
                  resizeMode="cover"
                />
              </View>

              <View style={SignUpStyles.changePhotoContainer}>
                <TouchableOpacity onPress={pickImage}>
                  <Text style={{ color: theme.background }}>
                    {string.signUp.changePhoto}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          <View style={[SignUpStyles.inputWrapper]}>
            <RHFTextInput
              placeholder={string.signUp.name}
              name="name"
              style={SignUpStyles.inputWidth}
            />

            <Select
              title={string.signUp.chooseYourProfession}
              options={professions}
              name="profession"
              style={SignUpStyles.inputWidth}
              wrapperStyle={SignUpStyles.selectCenter}
              selected={true}
            />

            <Select
              title={string.signUp.chooseYourCity}
              options={cities}
              name="city"
              style={SignUpStyles.inputWidth}
              wrapperStyle={SignUpStyles.selectCenter}
              selected={true}
            />

            <RHFTextInput
              placeholder={string.signUp.enterYourAddress}
              name="address"
              style={SignUpStyles.inputWidth}
            />

            <PhoneInput phoneName="phoneNumber" countryName="countryCode" />
            {!isPhone ? (
              <View style={{ alignSelf: 'flex-start' }}>
                <TouchableOpacity
                  onPress={() => setIsPhone(true)}
                  style={SignUpStyles.phoneNoContainer}
                >
                  <MaterialCommunityIcons
                    name="plus"
                    size={24}
                    color="#07C0E0"
                  />
                  <Text style={SignUpStyles.phoneNoText}>
                    {string.signUp.addPhoneNumber}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <PhoneInput phoneName="phoneNumber1" countryName="countryCode" />
            )}

            <RHFTextInput
              placeholder={string.signUp.email}
              name="email"
              style={SignUpStyles.inputWidth}
            />

            <RHFTextInput
              placeholder={string.signUp.password}
              name="password"
              secureTextEntry
              style={SignUpStyles.inputWidth}
            />
            <RHFTextInput
              placeholder={string.signUp.confirmPassword}
              name="confirmPassword"
              secureTextEntry
              style={SignUpStyles.inputWidth}
            />
            <Button
              title={string.button.signUp}
              handleBtn={handleSubmit(onSubmit)}
              styleBtn={SignUpStyles.inputWidth}
            />

            <View style={SignUpStyles.doYouHaveAndSignInContainer}>
              <Text
                style={[
                  { color: theme.text },
                  SignUpStyles.doYouAlreadyHaveAnAccountText,
                ]}
              >
                {string.signUp.doYouAlreadyHave}
              </Text>

              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={SignUpStyles.signIn}>{string.button.signIn}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </FormProvider>
  );
}
