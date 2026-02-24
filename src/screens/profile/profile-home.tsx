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
import { useRef, useState } from 'react';

export const ProfileBottom = () => {
  const methods = useForm();
  const hideProfilePhto = useRef(true);
  const [isHideProfile, setHideProfile] = useState<boolean>(true);
  return (
    <FormProvider {...methods}>
      <Header title="Profile" isExpanded={isHideProfile} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          marginTop: isHideProfile ? 400 : 180,
        }}
        enableOnAndroid={true}
        // extraScrollHeight={50}
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
        <View style={Styles.aboutMeContainer}>
          <Text style={Styles.aboutMeTitle}>About me</Text>

          <Text style={Styles.aboutMeDecription}>
            Hello, I am a lawyer, I do this more than 3 years, I will help with
            the task of any complexity, please contact.
          </Text>
        </View>

        <View style={{ paddingHorizontal: 25, gap: 10 }}>
          <Text style={Styles.diplomaText}>Documents</Text>

          <FlatList
            horizontal
            data={DiplomaMockData}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ gap: 10 }}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    width: 320,
                    backgroundColor: '#FFF',
                    padding: 15,
                    borderRadius: 25,
                    gap: 10,
                  }}
                >
                  <Image
                    source={require('../../assets/imageDemo.png')}
                    resizeMode="cover"
                    style={{ height: 100, width: 100, borderRadius: 20 }}
                  />
                  <View style={{ position: 'absolute', right: -38, top: 0 }}>
                    <Image
                      source={require('../../assets/Check.png')}
                      style={{ height: 30 }}
                      resizeMode="contain"
                    />
                  </View>

                  <View style={{ width: 170, gap: 5 }}>
                    <Text style={{ fontWeight: 900, fontSize: 16 }}>
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
          <Text style={Styles.sphereTitle}>Spheres of activity</Text>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            <View
              style={{
                backgroundColor: '#07C0E0',
                paddingHorizontal: 10,
                paddingVertical: 16,
                width: 150,
                flexDirection: 'row',
                borderRadius: 50,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={{ paddingLeft: 10, fontSize: 20, color: '#FFF' }}>
                Lawyer
              </Text>

              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="close"
                  size={21}
                  style={{ paddingRight: 8, color: '#FFF' }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#07C0E0',
                paddingVertical: 16,
                paddingHorizontal: 10,
                width: 150,
                flexDirection: 'row',
                borderRadius: 50,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={{ paddingLeft: 10, fontSize: 20, color: '#FFF' }}>
                Lawyer
              </Text>

              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="close"
                  size={21}
                  style={{ paddingRight: 8, color: '#FFF' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={Styles.phoneNoContainer}>
          <Text style={Styles.phoneNoText}>Phone number</Text>
          <RHFTextInput
            name="phoneNo"
            style={{ width: '99%', elevation: 2 }}
            placeholder="+ 7 (495) 510 55 55"
          />
        </View>

        <View
          style={{
            paddingHorizontal: 25,
            gap: 10,
            paddingVertical: 20,
            marginBottom: 25,
          }}
        >
          <Text style={Styles.diplomaText}>My reviews</Text>

          {DiplomaMockData.map(item => (
            <View
            key={item.id}
              style={{
                flexDirection: 'row',
                width: '100%',
                backgroundColor: '#FFF',
                padding: 15,
                borderRadius: 20,
                gap: 10,
              }}
            >
              <Image
                source={require('../../assets/imageDemo.png')}
                resizeMode="cover"
                style={{ height: 100, width: 100, borderRadius: 20 }}
              />

              <View style={{ width: '65%', gap: 5 }}>
                <Text style={{ fontWeight: 700, fontSize: 16 }}>
                  {item.diplomaName}
                </Text>

                <Text
                  numberOfLines={3}
                  style={{ color: '#9999AA', fontSize: 13 }}
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
          <View style={{ position: 'absolute', top: 130 }}>
            <Image
              source={require('../../assets/ProfilePhoto.png')}
              resizeMode="contain"
              style={{ height: 400, width: 413, position: 'relative' }}
            />
            <View
              style={{
                position: 'absolute',
                top: 20,
                left: 42,
                width: '100%',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#A280CA',
                  paddingHorizontal: 15,
                  paddingVertical: 7,
                  gap: 4,
                  borderRadius: 30,
                  alignSelf: 'flex-start',
                }}
              >
                <MaterialCommunityIcons
                  name="star-outline"
                  size={27}
                  color="#FFF"
                />
                <Text style={{ fontSize: 17, color: '#FFF' }}>4.9</Text>
              </View>
            </View>
            <View
              style={{
                // backgroundColor: 'red',
                position: 'absolute',
                top: 300,
                left: 55,
                width: '100%',
                // padding: 20,
                // margin: 20,
              }}
            >
              <Text style={{ color: '#FFF', fontWeight: 700, fontSize: 24 }}>
                Maria Minogarova
              </Text>
              <Text style={{ color: '#FFF', fontSize: 17 }}>
                Moscow, Russia
              </Text>
              <Text style={{ color: '#FFF', fontSize: 17 }}>
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
  aboutMeContainer: {
    paddingHorizontal: 25,
    gap: 10,
  },
  aboutMeTitle: {
    color: '#141414',
    fontWeight: 700,
    fontSize: 18,
  },
  aboutMeDecription: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 22,
    lineHeight: 23,
    color: '#141414',
  },
  diplomaContainer: { width: '96%', gap: 10 },
  diplomaText: { fontSize: 20, fontWeight: 700 },
  sphereContainer: {
    padding: 25,
    gap: 10,
  },
  sphereTitle: {
    color: '#141414',
    fontWeight: 700,
    fontSize: 18,
  },
  phoneNoContainer: {
    paddingHorizontal: 25,
    gap: 10,
  },
  phoneNoText: { fontSize: 20, fontWeight: 700 },
});
