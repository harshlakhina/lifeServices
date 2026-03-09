import { Image, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '../components/button';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themecontext';
import { imageSource } from '../constants';

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
        source={
          !isDark
            ? imageSource.imageDemo1
            : imageSource.imageDemo1black
        }
        style={Styles.lifeServiceImage}
        resizeMode="cover"
      />

      <View style={Styles.content}>
        <Image
          source={imageSource.profileLogo}
          style={Styles.profileLogoImage}
          resizeMode="contain"
        />

        <Text style={{ fontSize: 37 }}>
          <Text style={{ color: theme.text, fontWeight: 700 }}>Life</Text>
          <Text style={{ color: theme.text }}>Services</Text>
        </Text>

        <Text
          style={{
            color: theme.secondaryText,
            paddingTop: 28,
            paddingBottom: 60,
            fontSize: 18,
          }}
        >
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
  darkShadow: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10, // Android
  },
});
