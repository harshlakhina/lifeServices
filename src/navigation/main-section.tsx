import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamList } from './type';
import { Routes } from './constants';
import DrawerNavigation from './drawer-navigation';
import TermOfUse from '../screens/TermOfUse/termOfUse';
import CommunityRules from '../screens/communityRules/communityRules';
import PrivacyPolicy from '../screens/privacyPolicy/privacyPolicy';
import CopyRight from '../screens/copyright/copyright';
import MapScreen from '../components/mapScreen';
import { ProfileSetting } from '../screens/profileSetting/setting';
import ViewAllDocument from '../screens/viewDocument/viewAllDocument';
import EditDocument from '../screens/Document/editDocument';
import CreateNewDocument from '../screens/Document/CreateNewDocument';
import ViewAllPhoto from '../screens/viewAllPhoto/allPhoto';
import AddDocument from '../screens/addDocument/document';
const Stack = createNativeStackNavigator<MainStackParamList>();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.MainSection} component={DrawerNavigation} />
      <Stack.Screen name={Routes.TermOfUse} component={TermOfUse} />
      <Stack.Screen name={Routes.CommunityRules} component={CommunityRules} />
      <Stack.Screen name={Routes.PrivacyPolicy} component={PrivacyPolicy} />
      <Stack.Screen name={Routes.CopyRight} component={CopyRight} />
      <Stack.Screen name={Routes.Map} component={MapScreen} />
      <Stack.Screen name={Routes.ProfileSetting} component={ProfileSetting} />
      <Stack.Screen
        name={Routes.AddNewDocumentProfile}
        component={AddDocument}
      />
      <Stack.Screen name={Routes.ViewAll} component={ViewAllDocument} />
      <Stack.Screen name={Routes.EditDocument} component={EditDocument} />

      <Stack.Screen
        name={Routes.AddNewDocument}
        component={CreateNewDocument}
      />
      <Stack.Screen name={Routes.ViewAllPhotos} component={ViewAllPhoto} />
    </Stack.Navigator>
  );
}

export { MainStack };
