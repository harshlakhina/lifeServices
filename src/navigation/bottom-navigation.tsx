import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home/Home';
import { ProfileBottom } from '../screens/profile/profile-home';
import TopNavigation from './top-bar-navigation';
import { Image } from 'react-native';
import FavouriteScreen from '../screens/favourite/Favourite';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themecontext';
import { iconSource } from '../constants/iconSrc';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: theme.background },
      }}
    >
      <Tab.Screen
        name="Home-bottom"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={iconSource.homeIcon}
                resizeMode="contain"
                style={{
                  height: 29,
                  width: 29,
                  marginTop: 10,
                  tintColor: focused ? '#07C0E0' : theme.bottomTab,
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Application-bottom"
        component={TopNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={iconSource.inboxIcon}
                resizeMode="contain"
                style={{
                  height: 29,
                  width: 29,
                  marginTop: 10,
                  tintColor: focused ? '#07C0E0' : theme.bottomTab,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="profile-bottom"
        component={ProfileBottom}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={iconSource.profileBlackColor}
                resizeMode="contain"
                style={{
                  height: 29,
                  width: 29,
                  marginTop: 10,
                  tintColor: focused ? '#07C0E0' : theme.bottomTab,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="favourite-bottom"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={iconSource.heartIcon}
                resizeMode="contain"
                style={{
                  height: 29,
                  width: 29,
                  marginTop: 10,
                  tintColor: focused ? '#07C0E0' : theme.bottomTab,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
