import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomNavigation } from './bottom-navigation';
import { ForgotPassword } from '../screens/forgotPassword';
import { Home } from '../screens/home/Home';
import SignIn from '../screens/signIn';
import CustomDrawerContent from '../components/customerDrawer';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false,drawerPosition:"right",drawerStyle:{overflow:"visible"}}} drawerContent={(props)=><CustomDrawerContent {...props}/>}>
      <Drawer.Screen name="Home-Main" component={BottomNavigation} />
      <Drawer.Screen name="setting" component={ForgotPassword} />
      <Drawer.Screen name="Contact developers" component={Home} />
      <Drawer.Screen name="Notifications" component={SignIn} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
