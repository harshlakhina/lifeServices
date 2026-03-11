import { useContext, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../theme/themecontext';
import { imageSource, string } from '../constants';
import { Routes } from '../navigation';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(Routes.OnBoarding);
    }, 3000);
  }, [navigation]);
  const { theme, isDark } = useContext(ThemeContext);

  return (
    <View style={[Styles.container, { backgroundColor: theme.background }]}>
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

        <Text style={[Styles.text, { color: theme.text }]}>
          <Text style={Styles.textLife}>{string.auth.life}</Text>{' '}
          {string.auth.services}
        </Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  lifeServiceImage: {
    height: 400,
    width: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 150,
  },
  profileLogoImage: {
    height: 100,
  },
  text: {
    fontSize: 37,
  },
  textLife: { fontWeight: 'bold' },
});
