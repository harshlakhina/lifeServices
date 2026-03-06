import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomNavigation } from './bottom-navigation';
import CustomDrawerContent from '../components/customerDrawer';
import Setting from '../screens/setting/setting';
import Notification from '../screens/notification/notifiction';
import ContactDevelopers from '../screens/contactDevelopers/contactDevelopers';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home-Main" component={BottomNavigation} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Contact developers" component={ContactDevelopers} />
      <Drawer.Screen name="Notifications" component={Notification} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
