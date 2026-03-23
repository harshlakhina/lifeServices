import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export const Button = ({
  styleBtn,
  styleText,
  handleBtn,
  title,
  disabled = false,
}: any) => {
  return (
    <TouchableOpacity
      style={[Styles.btn, disabled && Styles.disabled, styleBtn]}
      onPress={handleBtn}
      disabled={disabled}
    >
      <Text style={[Styles.btnText, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  btn: {
    backgroundColor: '#02D1AC',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 55,
  },
  disabled: {
    opacity: 0.6,
  },
  btnText: { color: '#FFFFFF', fontWeight: 700, fontSize: 18 },
});
