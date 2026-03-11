import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { AuthStack } from './auth-section';

import { ThemeContext } from '../theme/themecontext';
import { StatusBar } from 'react-native';
import { MainStack } from './main-section';

export default function RootNavigation() {
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <StatusBar barStyle={!isDark ? 'dark-content' : 'light-content'} />
      <NavigationContainer>
        {/* <AuthStack /> */}
        <MainStack />
      </NavigationContainer>
    </>
  );
}
