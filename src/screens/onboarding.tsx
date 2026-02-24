import { Image, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '../components/button';

export default function OnboardingScreen({ navigation }: any) {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={Styles.container}
      enableOnAndroid={true}
      extraScrollHeight={50}
    >
      <Image
        source={require('../assets/lifeservice.png')}
        style={Styles.lifeServiceImage}
        resizeMode="cover"
      />

      <View style={Styles.content}>
        <Image
          source={require('../assets/profile-logo.png')}
          style={Styles.profileLogoImage}
          resizeMode="contain"
        />

        <Text style={{ fontSize: 37 }}>
          <Text style={{ color: '#141414', fontWeight: 700 }}>Life</Text>
          <Text style={{ color: '#141414' }}>Services</Text>
        </Text>

        <Text style={{ color: '#66737F', paddingTop: 28, paddingBottom:60,fontSize: 18 }}>
          Hello, we will help you find your specialist!
        </Text>

        <View style={Styles.btnContainer}>
          <Button
            title="Sign In "
            handleBtn={() => navigation.navigate('SignIn')}
          />
          <Button
            title="Sign Up "
            handleBtn={() => navigation.navigate('SignUp')}
            styleText={{ color: '#3EAEFF', fontWeight: 500, fontSize: 18 }}
            styleBtn={{ backgroundColor: '#FFF' }}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  lifeServiceImage: {
    width: '100%',
    height: 430,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  profileLogoImage: {
    height: 130,
  },
  btnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
