import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Header } from '../../components/header';
import { DiplomaMockData } from '../profile/mock-data-profile';
import { FormProvider, useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { launchImageLibrary } from 'react-native-image-picker';
import { RHFTextInput } from '../../hookform/rhfTextInput';
import { useContext, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Select } from '../../hookform/select';
import { professions } from '../../constants/profession';
import { Button } from '../../components/button';
import { cities } from '../../constants/cities';
import { countries } from '../../constants/countries';
import { ThemeContext } from '../../theme/themecontext';
import { iconSource, imageSource, string } from '../../constants';
import { Routes } from '../../navigation';

export const ProfileSetting = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const methods = useForm();
  const hideProfilePhto = useRef(true);
  const [isHideProfile, setHideProfile] = useState<boolean>(true);
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

  return (
    <FormProvider {...methods}>
      <Header
        title={string.profileSetting.profile}
        isExpanded={isHideProfile}
        setting={true}
      />

      <KeyboardAwareScrollView
        contentContainerStyle={[
          {
            backgroundColor: theme.background2,
          },
          Styles.scrollContainer,
        ]}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={150}
        onScroll={event => {
          const scrollY = event.nativeEvent.contentOffset.y;

          if (scrollY > 60 && hideProfilePhto.current) {
            hideProfilePhto.current = false;
            setHideProfile(false);
          } else if (scrollY < 40 && !hideProfilePhto.current) {
            hideProfilePhto.current = true;
            setHideProfile(true);
          }
        }}
      >
        <RHFTextInput
          name="name"
          style={Styles.inputWidth}
          placeholder={string.profileSetting.name}
        />

        <Select
          title={string.profileSetting.country}
          options={countries}
          name="Country"
          style={Styles.inputWidth}
          wrapperStyle={Styles.selectCenter}
          selected={true}
        />

        <Select
          title={string.profileSetting.cities}
          options={cities}
          name="Cities"
          style={Styles.inputWidth}
          wrapperStyle={Styles.selectCenter}
          selected={true}
        />

        <RHFTextInput
          name="email"
          style={Styles.inputWidth}
          placeholder={string.profileSetting.email}
        />
        <RHFTextInput
          name="phoneNo"
          style={Styles.phonoNoInput}
          placeholder={string.profile.phoneNoPlaceholder}
          keyboardType="phone-pad"
        />

        <View style={Styles.aboutMeContainer}>
          <Text style={[Styles.aboutMeTitle, { color: theme.text }]}>
            {string.profileSetting.aboutMe}
          </Text>

          <Text
            style={[
              Styles.aboutMeDecription,
              { backgroundColor: theme.input, color: theme.text },
            ]}
          >
            Hello, I am a lawyer, I do this more than 3 years, I will help with
            the task of any complexity, please contact.
          </Text>
        </View>

        <View style={Styles.documentMainContainer}>
          <View style={Styles.documentAndAddContainer}>
            <Text style={[Styles.documentText, { color: theme.text }]}>
              {string.profileSetting.documents}
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(Routes.AddNewDocumentProfile as never)
              }
            >
              <Text style={Styles.AddText}>{string.profileSetting.add}</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            data={DiplomaMockData}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={Styles.documentCardMainContainer}
            renderItem={({ item }) => {
              return (
                <View
                  style={[
                    Styles.documentCardContainer,
                    { backgroundColor: theme.card },
                  ]}
                >
                  <Image
                    source={imageSource.diploma}
                    resizeMode="cover"
                    style={Styles.documentCardLeftImage}
                  />
                  <TouchableOpacity
                    style={Styles.documentCardRightTrashContainer}
                  >
                    <Image
                      source={iconSource.trashOutline}
                      style={Styles.documentCardRightTrashImage}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>

                  <View style={Styles.documentCardContentContainer}>
                    <Text
                      style={[
                        {
                          color: theme.text,
                        },
                        Styles.documentCardNameText,
                      ]}
                    >
                      {item.diplomaName}
                    </Text>

                    <Text
                      numberOfLines={2}
                      style={Styles.documentCardDescriptionText}
                    >
                      {item.description}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>

        <View style={Styles.sphereContainer}>
          <Text style={[Styles.sphereTitle, { color: theme.text }]}>
            {string.profileSetting.spheresOfActivity}
          </Text>

          <Select
            title={string.profileSetting.chooseYourProfession}
            options={professions}
            name="profession"
            style={Styles.inputWidth}
            wrapperStyle={Styles.selectCenter}
            selected={true}
          />
        </View>

        <Button title={string.button.save} styleBtn={Styles.btnWidth} />
      </KeyboardAwareScrollView>

      {isHideProfile && (
        <>
          <View style={Styles.mainProfileImageContainer}>
            {!image ? (
              <Image
                source={imageSource.imageDemo3}
                resizeMode="contain"
                style={Styles.mainProfileImage}
              />
            ) : (
              <Image
                source={{ uri: image }}
                resizeMode="contain"
                style={Styles.mainProfileImage}
              />
            )}
            <View style={Styles.changePhotoContainer}>
              <TouchableOpacity onPress={pickImage}>
                <Text style={{ color: theme.background }}>
                  {string.signUp.changePhoto}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </FormProvider>
  );
};

const Styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    paddingTop: 420,
    gap: 20,
  },
  mainProfileImageContainer: {
    position: 'absolute',
    top: 130,
    height: 410,
    width: 413,
    alignItems: 'center',
  },
  mainProfileImage: { position: 'relative', height: '100%', width: '100%' },
  mainProfileImageTopContentContainer: {
    position: 'absolute',
    top: 20,
    left: 40,
  },
  changePhotoContainer: {
    position: 'absolute',
    // alignSelf: 'center',
    bottom: 18,
    backgroundColor: '#07C0E0',
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 35,
  },

  inputWidth: {
    width: '100%',
  },

  selectCenter: { alignItems: 'center' },
  aboutMeContainer: {
    gap: 15,
  },
  aboutMeTitle: {
    color: '#141414',
    fontWeight: 700,
    fontSize: 18,
    paddingHorizontal: 9,
  },
  aboutMeDecription: {
    padding: 20,
    borderRadius: 22,
    lineHeight: 23,
    color: '#141414',
  },

  documentMainContainer: { gap: 15 },
  documentAndAddContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 9,
  },
  documentText: { fontSize: 20, fontWeight: 700 },
  AddText: { color: '#07C0E0', fontSize: 20 },

  documentCardMainContainer: { gap: 15 },
  documentCardContainer: {
    flexDirection: 'row',
    width: 340,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 25,
    gap: 15,
  },
  documentCardLeftImage: { height: 100, width: 100, borderRadius: 20 },
  documentCardContentContainer: { width: '55%', gap: 5 },
  documentCardNameText: { fontWeight: 700, fontSize: 16 },
  documentCardDescriptionText: { color: '#9999AA', fontSize: 13 },
  documentCardRightTrashContainer: {
    position: 'absolute',
    right: 7,
    top: 7,
    backgroundColor: 'red',
    borderRadius: 60,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  documentCardRightTrashImage: { height: 28, width: 18, tintColor: '#FFF' },

  sphereContainer: {
    gap: 10,
  },
  sphereTitle: {
    color: '#141414',
    fontWeight: 700,
    fontSize: 18,
    paddingLeft: 9,
  },
  btnWidth: { width: '100%' },
  phonoNoInput: { width: '100%', elevation: 2 },
  container: { width: '100%' },
  wrapper: {
    width: '100%',
    position: 'relative',
    gap: 15,
  },
  input: {
    backgroundColor: 'white',
    elevation: 5,
    width: '80%',
    borderRadius: 30,
    height: 60,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  extraInputItem: { position: 'relative', borderWidth: 1 },
  dropdown: {
    position: 'absolute',
    top: 60,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 50,
    zIndex: 1,
  },
  extraDropDownItem: { width: '100%', borderRadius: 0 },
  selectedContainer: {
    flexDirection: 'row',
    width: '80%',
    flexWrap: 'wrap',
    gap: 10,
  },
  selectedText: {
    color: '#FFF',
    paddingLeft: 20,
    fontSize: 20,
  },
});
