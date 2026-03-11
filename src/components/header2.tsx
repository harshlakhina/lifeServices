import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../theme/themecontext';
import { useContext } from 'react';
import { iconSource } from '../constants';

type Header2Props = {
  title: string;
};

function Header2({ title }: Header2Props) {
  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation();
  return (
    <View style={[Styles.header, { backgroundColor: theme.background2 }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={iconSource.backIcon}
          resizeMode="contain"
          style={Styles.headerBackBtnImage}
        />
      </TouchableOpacity>

      <Text
        style={[Styles.headerTitle, { color: theme.text }]}
        numberOfLines={1}
      >
        {title}
      </Text>

      <View style={{ width: 30 }} />
    </View>
  );
}

export default Header2;

const Styles = StyleSheet.create({
  header: {
    paddingTop: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  headerBackBtnImage: { height: 20, width: 30, tintColor: '#07C0E0' },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    flex: 1,
    textAlign: 'center',
  },
});
