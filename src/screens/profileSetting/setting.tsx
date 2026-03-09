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
import { iconSource, imageSource } from '../../constants';

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
      <Header title="Profile" isExpanded={isHideProfile} setting={true} />

      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingTop: isHideProfile ? 420 : 180,
          padding: 20,
          paddingBottom: 20,
          gap: 15,
          backgroundColor: theme.background2,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
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
          style={{ width: '100%', elevation: 2 }}
          placeholder="Name"
        />

        <Select
          title="Country"
          options={countries}
          name="Country"
          style={[Styles.input, Styles.extraInputItem, { width: '100%' }]}
          wrapperStyle={{ alignItems: 'center' }}
          selected={true}
        />

        <Select
          title="Cities"
          options={cities}
          name="Cities"
          style={[Styles.input, Styles.extraInputItem, { width: '100%' }]}
          wrapperStyle={{ alignItems: 'center' }}
          selected={true}
        />

        <RHFTextInput
          name="email"
          style={{ width: '100%', elevation: 2 }}
          placeholder="email"
        />

        <View style={Styles.aboutMeContainer}>
          <Text style={[Styles.aboutMeTitle, { color: theme.text }]}>
            About me
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

        <View style={{ gap: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '96%',
            }}
          >
            <Text style={[Styles.diplomaText, { color: theme.text }]}>
              Documents
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddDocument' as never)}
            >
              <Text style={{ color: '#07C0E0', fontSize: 20 }}>Add</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            data={DiplomaMockData}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ gap: 10 }}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    width: 330,
                    backgroundColor: theme.input,
                    padding: 15,
                    borderRadius: 25,
                    gap: 10,
                  }}
                >
                  <Image
                    source={imageSource.diploma}
                    resizeMode="cover"
                    style={{ height: 100, width: 100, borderRadius: 20 }}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      right: 7,
                      top: 7,
                      backgroundColor: 'red',
                      borderRadius: 60,
                      width: 32,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      source={iconSource.trashOutline}
                      style={{ height: 28, width: 18, tintColor: '#FFF' }}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>

                  <View style={{ width: 170, gap: 5 }}>
                    <Text
                      style={{
                        fontWeight: 900,
                        fontSize: 16,
                        color: theme.text,
                      }}
                    >
                      {item.diplomaName}
                    </Text>

                    <Text
                      numberOfLines={2}
                      style={{ color: '#9999AA', fontSize: 13 }}
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
            Spheres of activity
          </Text>

          <Select
            title="Choose your profession"
            options={professions}
            name="profession"
            style={[Styles.input, Styles.extraInputItem, { width: '97%' }]}
            wrapperStyle={{ alignItems: 'center' }}
            selected={true}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button title="Save" styleBtn={{ width: '100%' }} />
        </View>
      </KeyboardAwareScrollView>

      {isHideProfile && (
        <View
          style={{
            position: 'absolute',
            top: 110,
            padding: 20,
            left: image ? 10 : 0,
          }}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              resizeMode="cover"
              style={{
                height: 400,
                width: 350,
                position: 'relative',
                borderRadius: 30,
              }}
            />
          ) : (
            <Image
              source={imageSource.imageDemo3}
              resizeMode="contain"
              style={{ height: 400, width: 370, position: 'relative' }}
            />
          )}

          <View
            style={{
              position: 'absolute',
              bottom: 40,
              alignItems: 'center',
              width: '100%',
              marginLeft: 12,
            }}
          >
            <TouchableOpacity
              onPress={pickImage}
              style={{
                backgroundColor: '#07C0E0',
                padding: 15,
                paddingHorizontal: 35,
                borderRadius: 50,
              }}
            >
              <Text style={{ color: '#FFF' }}>Change Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </FormProvider>
  );
};

const Styles = StyleSheet.create({
  aboutMeContainer: {
    width: '99%',
    gap: 10,
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
  diplomaContainer: { width: '97%', gap: 10 },
  diplomaText: { fontSize: 20, fontWeight: 700, paddingLeft: 9 },
  sphereContainer: {
    gap: 10,
  },
  sphereTitle: {
    color: '#141414',
    fontWeight: 700,
    fontSize: 18,
    paddingLeft: 9,
  },
  phoneNoContainer: {
    paddingHorizontal: 25,
    gap: 10,
  },
  phoneNoText: { fontSize: 20, fontWeight: 700 },
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
