import { Image, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '../components/button';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themecontext';
import { imageSource, string } from '../constants';
import { Routes } from '../navigation';

export default function OnboardingScreen({ navigation }: any) {
  const { theme, isDark } = useContext(ThemeContext);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[
        Styles.container,
        { backgroundColor: theme.background },
      ]}
      enableOnAndroid={true}
      extraScrollHeight={50}
    >
      <Image
        source={!isDark ? imageSource.imageDemo1 : imageSource.imageDemo1black}
        style={Styles.lifeServiceImage}
        resizeMode="cover"
      />

      <View style={Styles.content}>
        <Image
          source={imageSource.profileLogo}
          style={Styles.profileLogoImage}
          resizeMode="contain"
        />

        <Text style={[{ color: theme.text }, Styles.text]}>
          <Text style={Styles.textLife}>{string.auth.life}</Text>{' '}
          {string.auth.services}
        </Text>

        <Text style={[{ color: theme.secondaryText }, Styles.description]}>
          {string.auth.helloWeWillHelp}
        </Text>

        <View style={Styles.btnContainer}>
          <Button
            title={string.button.signIn}
            handleBtn={() => navigation.navigate(Routes.SignIn)}
          />
          <Button
            title={string.button.signUp}
            handleBtn={() => navigation.navigate(Routes.SignUp)}
            styleText={Styles.signUpBtn}
            styleBtn={{ backgroundColor: theme.background }}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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

  text: {
    fontSize: 37,
  },
  textLife: {
    fontWeight: '700',
  },
  description: { paddingTop: 28, paddingBottom: 60, fontSize: 18 },
  signUpBtn: { color: '#3EAEFF', fontWeight: 500, fontSize: 18 },
});
