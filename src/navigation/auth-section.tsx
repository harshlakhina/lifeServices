import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './constants';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signup';
import { ForgotPassword } from '../screens/forgotPass/forgotPassword';
import { AuthStackParamList } from './type';
import OnboardingScreen from '../screens/onboarding';
import SplashScreen from '../screens/splash';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themecontext';
import { SafeAreaView, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthStack() {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={[{ backgroundColor: theme.background2 }, style.container]}
    >
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name={Routes.Splash} component={SplashScreen} />
          <Stack.Screen name={Routes.OnBoarding} component={OnboardingScreen} />
          <Stack.Screen name={Routes.SignIn} component={SignIn} />
          <Stack.Screen name={Routes.SignUp} component={SignUp} />
          <Stack.Screen
            name={Routes.ForgotPassword}
            component={ForgotPassword}
          />
        </Stack.Group>
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export { AuthStack };

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
