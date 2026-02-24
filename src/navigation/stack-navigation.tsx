import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash';
import OnboardingScreen from '../screens/onboarding';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signup';
import { ForgotPassword } from '../screens/forgotPassword';
import DrawerNavigation from './drawer-navigation';

const Tab = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Splash" component={SplashScreen} />
      <Tab.Screen name="Onboarding" component={OnboardingScreen} />
      <Tab.Screen name="SignIn" component={SignIn} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="ForgotPassWord" component={ForgotPassword} />
       <Tab.Screen name="Home-screen" component={DrawerNavigation} />
    </Tab.Navigator>
  );
}
