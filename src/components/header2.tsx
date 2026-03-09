import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity ,View} from 'react-native';
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
    <View style={[Styles.header,{backgroundColor:theme.background2}]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={Styles.headerBackBtn}
      >
        <Image
          source={iconSource.backIcon}
          resizeMode="contain"
          style={Styles.headerBackBtnImage}
        />
      </TouchableOpacity>
      <Text style={[Styles.headerTitle,{color:theme.text}]} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}

export default Header2;

const Styles = StyleSheet.create({
  header: {
    paddingTop: 55,
    paddingBottom:10,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    gap: 10,

  },
  headerBackBtn: { width: '30%' },
  headerBackBtnImage: { height: 22, width: 40, tintColor: '#07C0E0' },
  headerTitle: {
    fontSize: 25,
    color: '#141414',
    fontWeight: 700,
    width: '60%',
  },
});
