import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useContext } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../theme/themecontext';
import { iconSource, imageSource, string } from '../constants';

function CustomDrawerContent(props: any) {
  const { theme } = useContext(ThemeContext);
  const drawerItems = [
    {
      name: 'Settings',
      label: 'Settings',
      icon: iconSource.backIcon,
      symbol: iconSource.settings,
    },
    {
      name: 'Map',
      label: 'Next To Me',
      icon: iconSource.backIcon,
      symbol: iconSource.mapIcon,
    },
    {
      name: 'Notifications',
      label: 'Notifications',
      icon: iconSource.backIcon,
      symbol: iconSource.bellIcon,
    },
  ];

  return (
    <DrawerContentScrollView
      contentContainerStyle={[
        {
          backgroundColor: theme.background,
        },
        Styles.scrollContainer,
      ]}
    >
      <View style={Styles.topContentContainer}>
        <Image
          source={imageSource.bgImage}
          style={Styles.topContentImage}
          resizeMode="cover"
        />

        <View style={Styles.topProfileContainer}>
          <Image
            source={imageSource.imageDemo2}
            resizeMode="cover"
            style={Styles.topProfileImage}
          />

          <View>
            <Text style={Styles.topContentText}>Maria Minogarova</Text>

            <View style={Styles.topContentRatingContainer}>
              <MaterialCommunityIcons
                name="star-outline"
                size={25}
                color="#FFF"
              />
              <Text style={Styles.topContentRatingText}>4.2</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={Styles.centerContentMainContainer}>
        {drawerItems.map(item => (
          <TouchableOpacity
            key={item.name}
            style={Styles.centerContentContainer}
            onPress={() => props.navigation.navigate(item.name)}
          >
            <View style={Styles.centerContentLeftItemsContainer}>
              <Image
                source={item.symbol}
                resizeMode="contain"
                style={Styles.centerContentLeftItemsContainerImage}
              />
              <Text
                style={[
                  { color: theme.text },
                  Styles.centerContentLeftItemsContainerText,
                ]}
              >
                {item.label}
              </Text>
            </View>
            <View>
              <Image
                source={item.icon}
                resizeMode="contain"
                style={Styles.centerContentRightItemsImage}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={Styles.bottomMainContainer}>
        <View
          style={[
            { backgroundColor: theme.endSessionBg },
            Styles.bottomContainer,
          ]}
        >
          <TouchableOpacity
            style={Styles.bottomContainerBtn}
            onPress={() => props.navigation.navigate('SignIn')}
          >
            <Image
              source={iconSource.logOutOutline}
              resizeMode="cover"
              style={Styles.bottomContainerBtnImage}
            />
            <Text style={Styles.bottomContainerBtnText}>
              {string.button.endSession}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;

const Styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 0,
  },
  topContentContainer: { marginHorizontal: -20 },
  topContentImage: { width: '100%', height: 350 },
  topProfileContainer: {
    position: 'absolute',
    top: 70,
    left: 50,
    flexDirection: 'row',
    gap: 10,
  },
  topProfileImage: { height: 85, width: 90, borderRadius: 10 },
  topContentText: { fontSize: 18, color: '#FFF' },
  topContentRatingContainer: { flexDirection: 'row', alignItems: 'center' },
  topContentRatingText: { color: '#FFF', fontSize: 19 },

  centerContentMainContainer: { marginTop: -60, marginLeft: -15 },
  centerContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  centerContentLeftItemsContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  centerContentLeftItemsContainerImage: {
    height: 25,
    width: 25,
    tintColor: '#07C0E0',
  },
  centerContentLeftItemsContainerText: { fontSize: 20 },
  centerContentRightItemsImage: {
    height: 20,
    width: 20,
    transform: [{ rotate: '180deg' }],
    tintColor: '#8F9CA9',
  },

  bottomMainContainer: { alignItems: 'flex-end' },
  bottomContainer: {
    padding: 16,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    marginTop: 350,
    width: '90%',
  },
  bottomContainerBtn: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  bottomContainerBtnImage: { height: 19, width: 24, tintColor: '#FE5050' },
  bottomContainerBtnText: { fontSize: 20, color: '#FE5050' },
});
