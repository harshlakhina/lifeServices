import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';
import { Inbox } from '../screens/Application/inbox';
import { Created } from '../screens/Application/created';
import { Header } from '../components/header';
import { string } from '../constants';

const TopTab = createMaterialTopTabNavigator();
function TopNavigation() {
  return (
    <>
      <TopTab.Navigator
        tabBar={props => (
          <>
            <Header title={string.application.applications} />
            <MaterialTopTabBar {...props} />
          </>
        )}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'transparent',
          },
          tabBarLabelStyle: {
            color: '#FFF',
            fontSize: 16,
            fontWeight: 700,
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#FFF',
          },
        }}
      >
        <TopTab.Screen name="Inbox" component={Inbox} />
        <TopTab.Screen name="Created" component={Created} />
      </TopTab.Navigator>
    </>
  );
}

export default TopNavigation;
