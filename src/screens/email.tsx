import { View, StyleSheet } from 'react-native';

import { RHFTextInput } from '../hookform/rhfTextInput';
import { string } from '../constants';
import { Button } from '../components/button';
import { useDispatch } from 'react-redux';
import { forgotPasswordStep1 } from './auth/slice';
import { useFormContext } from 'react-hook-form';

export const Email = () => {
  // const forPassEmailSuccess = useSelector(
  //   (state: any) => state.auth.forPassEmailSuccess,
  // );

  const { watch } = useFormContext();
  // useEffect(() => {
  //   if (forPassEmailSuccess) {
  //     setStep(2);
  //   }
  // }, [forPassEmailSuccess, setStep]);
  const email = watch('email');
  const dispatch = useDispatch();

  async function handleStep1() {
    await dispatch(forgotPasswordStep1({ email }));
  }
  return (
    <View style={[Styles.container]}>
      <RHFTextInput
        name="email"
        placeholder={string.forgotPassword.enterYourEMail}
      />
      <Button title="Send Link" handleBtn={handleStep1} />
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
