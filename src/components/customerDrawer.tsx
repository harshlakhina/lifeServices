import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useContext } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../theme/themecontext';

function CustomDrawerContent(props: any) {
  const {theme}=useContext(ThemeContext)
  const drawerItems = [
    {
      name: 'Home-Main',
      label: 'Home',
      icon: require('../assets/arrow-back-outline.png'),
      symbol: require('../assets/homeIcon.png'),
    },
    {
      name: 'Setting',
      label: 'Setting',
      icon: require('../assets/arrow-back-outline.png'),
      symbol: require('../assets/settings.png'),
    },
    {
      name: 'Contact developers',
      label: 'Contact developers',
      icon: require('../assets/arrow-back-outline.png'),
      symbol: require('../assets/Contactpeople.png'),
    },
    {
      name: 'Notifications',
      label: 'Notifications',
      icon: require('../assets/arrow-back-outline.png'),
      symbol: require('../assets/bell-outline.png'),
    },
  ];
  return (
    <DrawerContentScrollView contentContainerStyle={{ paddingTop: 0,backgroundColor:theme.background}}>
      <View style={{ marginHorizontal: -20 }}>
        <Image
          source={require('../assets/BGImage.png')}
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
            source={require('../assets/imageDemo.png')}
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
              <Text style={{ fontSize: 20 ,color:theme.text}}>{item.label}</Text>
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
            marginTop: 280,
            width: '90%',
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
            onPress={() => props.navigation.navigate('SignIn')}
          >
            <Image
              source={require('../assets/log-out-outline.png')}
              resizeMode="cover"
              style={{ height: 19, width: 24, tintColor: '#FE5050' }}
            />
            <Text style={{ fontSize: 20, color: '#FE5050' }}>End session</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
