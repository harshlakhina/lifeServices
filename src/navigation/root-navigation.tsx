import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './auth-section';

import { ThemeContext } from '../theme/themecontext';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { MainStack } from './main-section';

export default function RootNavigation() {
  const { isDark } = useContext(ThemeContext);
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  return (
    <>
      <StatusBar barStyle={!isDark ? 'dark-content' : 'light-content'} />
      <NavigationContainer>{<MainStack />}</NavigationContainer>
    </>
  );
}
