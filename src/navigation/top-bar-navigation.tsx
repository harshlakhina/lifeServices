import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import { Inbox } from '../screens/Application/inbox';
import { Created } from '../screens/Application/created';
import { Header } from '../components/header';
import { string } from '../constants';
import { View } from 'react-native';

const TopTab = createMaterialTopTabNavigator();
function TopNavigation() {
  const renderTabBar = (props: MaterialTopTabBarProps) => (
    <View>
      <Header title={string.application.applications} />
      <MaterialTopTabBar {...props} />
    </View>
  );
  return (
    <>
      <TopTab.Navigator
        tabBar={renderTabBar}
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
