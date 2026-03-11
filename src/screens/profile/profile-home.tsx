import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Header } from '../../components/header';
import { DiplomaMockData } from './mock-data-profile';
import { FormProvider, useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RHFTextInput } from '../../hookform/rhfTextInput';
import { useContext, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../theme/themecontext';
import { imageSource, string } from '../../constants';

export const ProfileBottom = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const methods = useForm();
  const hideProfilePhto = useRef(true);
  const [isHideProfile, setHideProfile] = useState<boolean>(true);
  return (
    <FormProvider {...methods}>
      <Header
        title={string.profile.profile}
        isExpanded={isHideProfile}
        handleFunction={() => navigation.navigate('ProfileSetting' as never)}
      />

      <KeyboardAwareScrollView
        contentContainerStyle={[
          {
            backgroundColor: theme.background2,
          },
          Styles.scrollContainer,
        ]}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="always"
        onScroll={event => {
          const scrollY = event.nativeEvent.contentOffset.y;

          if (scrollY > 120 && hideProfilePhto.current) {
            hideProfilePhto.current = false;
            setHideProfile(false);
          } else if (scrollY < 80 && !hideProfilePhto.current) {
            hideProfilePhto.current = true;
            setHideProfile(true);
          }
        }}
      >
        <View style={[Styles.aboutMeContainer]}>
          <Text style={[Styles.aboutMeTitle, { color: theme.text }]}>
            {string.profile.aboutMe}
          </Text>

          <Text
            style={[
              Styles.aboutMeDecription,
              { backgroundColor: theme.card, color: theme.text },
            ]}
          >
            Hello, I am a lawyer, I do this more than 3 years, I will help with
            the task of any complexity, please contact.
          </Text>
        </View>

        <View>
          <View style={Styles.documentAndViewAllContainer}>
            <Text style={[Styles.documentText, { color: theme.text }]}>
              {string.profile.documents}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ViewDocument' as never)}
            >
              <Text style={Styles.viewAllText}>{string.profile.viewAll}</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            data={DiplomaMockData}
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
                  <View style={Styles.documentCardCheckFillImageContainer}>
                    <Image
                      source={imageSource.checkFill}
                      style={Styles.documentCardCheckFillImage}
                      resizeMode="contain"
                    />
                  </View>

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
            {string.profile.spheresOfActivity}
          </Text>

          <View style={Styles.sphereBodyContainer}>
            <View style={Styles.sphereBtnContainer}>
              <Text style={Styles.sphereBtnText}>Lawyer</Text>

              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="close"
                  size={21}
                  style={Styles.sphereBtnCrossBtn}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={Styles.phoneNoContainer}>
          <Text style={[Styles.phoneNoText, { color: theme.text }]}>
            {string.profile.phoneNumber}
          </Text>
          <RHFTextInput
            name="phoneNo"
            style={Styles.phonoNoInput}
            placeholder={string.profile.phoneNoPlaceholder}
            keyboardType="phone-pad"
          />
        </View>

        <View>
          <Text style={[Styles.myReviewText, { color: theme.text }]}>
            {string.profile.myReviews}
          </Text>
          {DiplomaMockData.map(item => (
            <View
              key={item.id}
              style={[
                Styles.myReviewCardContainer,
                { backgroundColor: theme.card },
              ]}
            >
              <Image
                source={imageSource.imageDemo2}
                resizeMode="cover"
                style={Styles.myReviewCardImage}
              />

              <View style={Styles.myReviewContentContainer}>
                <Text
                  style={[Styles.myReviewCardNameText, { color: theme.text }]}
                >
                  {item.diplomaName}
                </Text>

                <Text
                  numberOfLines={3}
                  style={Styles.myReviewCardNameDescription}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </KeyboardAwareScrollView>

      {isHideProfile && (
        <>
          <View style={Styles.mainProfileImageContainer}>
            <Image
              source={imageSource.imageDemo3}
              resizeMode="contain"
              style={Styles.mainProfileImage}
            />
            <View style={Styles.mainProfileImageTopContentContainer}>
              <View style={Styles.mainProfileTopContentBodyContainer}>
                <MaterialCommunityIcons
                  name="star-outline"
                  size={27}
                  color="#FFF"
                />
                <Text style={Styles.mainProfileTopContentText}>4.9</Text>
              </View>
            </View>

            <View style={Styles.mainProfileBottomContainer}>
              <Text style={Styles.mainProfileBottomNameText}>
                Maria Minogarova
              </Text>
              <Text style={Styles.mainProfileBottomText}>Moscow, Russia</Text>
              <Text style={Styles.mainProfileBottomText}>
                st, Novy Arbat, 193
              </Text>
            </View>
          </View>
        </>
      )}
    </FormProvider>
  );
};

const Styles = StyleSheet.create({
  scrollContainer: { padding: 20 },
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
  mainProfileTopContentBodyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A280CA',
    paddingHorizontal: 15,
    paddingVertical: 7,
    gap: 4,
    borderRadius: 30,
    alignSelf: 'flex-start',
  },
  mainProfileTopContentText: { fontSize: 17, color: '#FFF' },
  mainProfileBottomContainer: {
    position: 'absolute',
    top: 315,
    left: 40,
    width: '100%',
  },
  mainProfileBottomNameText: { color: '#FFF', fontWeight: 700, fontSize: 24 },
  mainProfileBottomText: { color: '#FFF', fontSize: 17 },
  aboutMeContainer: {
    gap: 15,
    paddingTop: 420,
  },
  aboutMeTitle: {
    color: '#141414',
    fontWeight: 700,
    fontSize: 18,
  },
  aboutMeDecription: {
    padding: 20,
    borderRadius: 22,
    lineHeight: 23,
    color: '#141414',
  },
  documentAndViewAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 17,
  },
  documentText: { fontSize: 20, fontWeight: 700 },
  viewAllText: { color: '#07C0E0', fontSize: 20 },
  documentCardMainContainer: { gap: 15 },
  documentCardContainer: {
    flexDirection: 'row',
    width: 320,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 25,
    gap: 15,
    marginTop: 17,
    marginRight: 9,
  },
  documentCardLeftImage: { height: 100, width: 100, borderRadius: 20 },
  documentCardCheckFillImageContainer: {
    position: 'absolute',
    right: -41,
    top: -7,
  },
  documentCardCheckFillImage: { height: 30 },
  documentCardContentContainer: { width: '55%', gap: 5 },
  documentCardNameText: { fontWeight: 700, fontSize: 16 },
  documentCardDescriptionText: { color: '#9999AA', fontSize: 13 },

  sphereContainer: {
    gap: 15,
    marginVertical: 17,
  },
  sphereTitle: {
    color: '#141414',
    fontWeight: 700,
    fontSize: 18,
  },
  sphereBodyContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  sphereBtnContainer: {
    backgroundColor: '#07C0E0',
    paddingHorizontal: 10,
    paddingVertical: 16,
    width: 150,
    flexDirection: 'row',
    borderRadius: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sphereBtnText: { paddingLeft: 10, fontSize: 20, color: '#FFF' },
  sphereBtnCrossBtn: { paddingRight: 8, color: '#FFF' },
  phoneNoContainer: {
    gap: 17,
  },
  phoneNoText: { fontSize: 20, fontWeight: 700 },
  phonoNoInput: { width: '100%', elevation: 2 },
  myReviewText: { fontSize: 20, fontWeight: 700, marginVertical: 17 },
  myReviewCardContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 20,
    gap: 10,
    marginBottom: 15,
  },
  myReviewCardImage: { height: 100, width: 100, borderRadius: 20 },
  myReviewContentContainer: { width: '65%', gap: 5 },
  myReviewCardNameText: { fontWeight: 700, fontSize: 16 },
  myReviewCardNameDescription: { color: '#9999AA', fontSize: 13 },
});
