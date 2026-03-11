import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = () => {
  return <View style={Styles.line} />;
};

export default Divider;

const Styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: '#D5DDE5',
  },
});
