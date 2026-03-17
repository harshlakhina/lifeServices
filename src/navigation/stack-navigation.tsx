import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash';
import OnboardingScreen from '../screens/onboarding';
import SignIn from '../screens/auth/view/signIn';
import SignUp from '../screens/auth/view/signup';
import { ForgotPassword } from '../screens/forgotPass/forgotPassword';
import DrawerNavigation from './drawer-navigation';
import TermOfUse from '../screens/TermOfUse/termOfUse';
import CommunityRules from '../screens/communityRules/communityRules';
import PrivacyPolicy from '../screens/privacyPolicy/privacyPolicy';
import CopyRight from '../screens/copyright/copyright';
import { ProfileSetting } from '../screens/profileSetting/setting';
import MapScreen from '../components/mapScreen';
import AddDocument from '../screens/addDocument/document';
import ViewAllDocument from '../screens/viewDocument/viewAllDocument';
import CreateNewDocument from '../screens/Document/CreateNewDocument';
import ViewAllPhoto from '../screens/viewAllPhoto/allPhoto';
import EditDocument from '../screens/Document/editDocument';

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

      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="ProfileSetting" component={ProfileSetting} />
      <Tab.Screen name="AddDocument" component={AddDocument} />
      <Tab.Screen name="ViewDocument" component={ViewAllDocument} />
      <Tab.Screen name="CreateAnApplication" component={CreateNewDocument} />
      <Tab.Screen name="EditApplication" component={EditDocument} />
      <Tab.Screen name="ViewAllPhoto" component={ViewAllPhoto} />

      <Tab.Screen name="TermOfUse" component={TermOfUse} />
      <Tab.Screen name="CommunityRules" component={CommunityRules} />
      <Tab.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Tab.Screen name="CopyRight" component={CopyRight} />
    </Tab.Navigator>
  );
}
