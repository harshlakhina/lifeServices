import { View, StyleSheet } from 'react-native';

import { RHFTextInput } from '../hookform/rhfTextInput';
import { string } from '../constants';

export const Email = () => {
  return (
    <View style={[Styles.container]}>
      <RHFTextInput name="email" placeholder={string.forgotPassword.enterYourEMail} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 65,
    marginBottom: 25,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 30,
    height: 58,
    paddingHorizontal: 20,
  },
});
