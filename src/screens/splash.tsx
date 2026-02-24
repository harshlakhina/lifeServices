import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function SplashScreen({navigation}:any) {
  useEffect(()=>{
      setTimeout(()=>{
        navigation.replace("Onboarding")
    },3000)
  },[navigation])


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

        <Text style={{fontSize:40,}}>
          <Text style={{ color: '#141414' ,fontWeight:700}}>Life</Text>
          <Text style={{ color: '#141414' }}>Services</Text>
        </Text>
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
    height:400,
    width: '100%',
  },
  content: {
    flex:1,
    alignItems: 'center',
    paddingTop:150
  },
  profileLogoImage: {
    height: 100,
  },
});
