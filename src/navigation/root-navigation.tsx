import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './auth-section';

import { ThemeContext } from '../theme/themecontext';
import { StatusBar } from 'react-native';
import { MainStack } from './main-section';
import { useUser } from '../redux/hooks/useUser';

export default function RootNavigation() {
  const { isDark } = useContext(ThemeContext);
  const user = useUser();
  const accessToken = user.token;

  return (
    <>
      <StatusBar barStyle={!isDark ? 'dark-content' : 'light-content'} />
      <NavigationContainer>
        {accessToken ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
}
