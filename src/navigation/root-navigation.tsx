import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './auth-section';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../theme/themecontext';
import { StatusBar, StyleSheet } from 'react-native';

export default function RootNavigation() {
  const { theme, isDark } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[{ backgroundColor: theme.background2 }, style.container]}
    >
      <StatusBar barStyle={!isDark ? 'dark-content' : 'light-content'} />
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
