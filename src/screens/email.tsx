import { View, StyleSheet } from 'react-native';

import { RHFTextInput } from '../hookform/rhfTextInput';
import { string } from '../constants';
import { Button } from '../components/button';
import { useFormContext } from 'react-hook-form';
import { useRequestPasswordResetMutation } from '../redux/api/baseapi';

export const Email = ({ setStep }: { setStep: (step: number) => void }) => {
  const { watch } = useFormContext();
  const email = watch('email');
  const [requestPasswordReset, { isLoading }] =
    useRequestPasswordResetMutation();

  async function handleStep1() {
    if (!email) {
      return;
    }
    try {
      await requestPasswordReset({ email }).unwrap();
      setStep(2);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={[Styles.container]}>
      <RHFTextInput
        name="email"
        placeholder={string.forgotPassword.enterYourEMail}
      />
      <Button
        title={isLoading ? 'Sending...' : 'Send Link'}
        handleBtn={handleStep1}
        disabled={isLoading}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 65,
    marginBottom: 25,
    gap: 40,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 30,
    height: 58,
    paddingHorizontal: 20,
  },
});
