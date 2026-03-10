import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useContext } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
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
      name: 'Contact developers',
      label: 'Contact developers',
      icon: iconSource.backIcon,
      symbol: imageSource.contactPeople,
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
      contentContainerStyle={{
        paddingTop: 0,
        backgroundColor: theme.background,
        flexGrow: 1,
      }}
    >
      <View style={{ marginHorizontal: -20 }}>
        <Image
          source={imageSource.bgImage}
          style={{ width: '100%', height: 350 }}
          resizeMode="cover"
        />

        <View
          style={{
            position: 'absolute',
            top: 70,
            left: 50,
            flexDirection: 'row',
            gap: 10,
          }}
        >
          <Image
            source={imageSource.imageDemo2}
            resizeMode="cover"
            style={{ height: 85, width: 90, borderRadius: 10 }}
          />

          <View>
            <Text style={{ fontSize: 18, color: '#FFF' }}>Maria</Text>
            <Text style={{ fontSize: 18, color: '#FFF' }}>Minogarova</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons
                name="star-outline"
                size={25}
                color="#FFF"
              />
              <Text style={{ color: '#FFF', fontSize: 19 }}>4.2</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ marginTop: -60, marginLeft: -15 }}>
        {drawerItems.map(item => (
          <TouchableOpacity
            key={item.name}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 15,
              paddingHorizontal: 20,
            }}
            onPress={() => props.navigation.navigate(item.name)}
          >
            <View
              style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
            >
              <Image
                source={item.symbol}
                resizeMode="contain"
                style={{ height: 25, width: 25, tintColor: '#07C0E0' }}
              />
              <Text style={{ fontSize: 20, color: theme.text }}>
                {item.label}
              </Text>
            </View>
            <View>
              <Image
                source={item.icon}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                  transform: [{ rotate: '180deg' }],
                  tintColor: '#8F9CA9',
                }}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ alignItems: 'flex-end' }}>
        <View
          style={{
            backgroundColor: theme.endSessionBg,
            padding: 16,
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            marginTop: 350,
            width: '90%',
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
            onPress={() => props.navigation.navigate('SignIn')}
          >
            <Image
              source={iconSource.logOutOutline}
              resizeMode="cover"
              style={{ height: 19, width: 24, tintColor: '#FE5050' }}
            />
            <Text style={{ fontSize: 20, color: '#FE5050' }}>{string.button.endSession}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
