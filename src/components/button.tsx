import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export const Button = ({ styleBtn, styleText, handleBtn, title }: any) => {
  return (
    <TouchableOpacity style={[Styles.btn, styleBtn]} onPress={handleBtn}>
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
  btnText: { color: '#FFFFFF', fontWeight: 700, fontSize: 18 },
});
