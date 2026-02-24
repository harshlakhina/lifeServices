import React from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = ({ title, isExpanded }: any) => {
  const navigation = useNavigation();
  return (
    <>
      {title === 'Home' && (
        <View style={{ height: 137, width: '100%' }}>
          <Image
            source={require('../assets/BGImage.png')}
            resizeMode="cover"
            style={{ width: '100%', height: isExpanded ? 320 : 180 }}
          />
        </View>
      )}
      {title === 'Profile' && (
        <View style={{ height: 137, width: '100%' }}>
          <Image
            source={require('../assets/BGImage.png')}
            resizeMode="cover"
            style={{ width: '100%', height: isExpanded ? 450 : 180 }}
          />
        </View>
      )}

      {title === 'Application' && (
        <View style={{ height: 150, width: '100%' }}>
          <Image
            source={require('../assets/BGImage.png')}
            resizeMode="cover"
            style={{ width: '100%', height: 300 }}
          />
        </View>
      )}
      {title === 'Favourites' && (
        <View style={{ height: 100, width: '100%' }}>
          <Image
            source={require('../assets/BGImage.png')}
            resizeMode="cover"
            style={{ width: '100%', height: 200 }}
          />
        </View>
      )}

      <View
        style={{
          position: 'absolute',
          top: 45,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          padding: 20,
          alignItems: 'center',
        }}
      >
        {title === 'Home' && (
          <TouchableOpacity>
            <Image
              source={require('../assets/MapIcon.png')}
              resizeMode="contain"
              style={{ height: 35, width: 30 }}
            />
          </TouchableOpacity>
        )}

        {title === 'Profile' && (
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}
          >
            <Image
              source={require('../assets/EditIcon.png')}
              style={{ height: 29, width: 29 }}
            />
            <Text style={{ color: '#FFF', fontSize: 14 }}>Edit</Text>
          </TouchableOpacity>
        )}
        {title === 'Application' && (
          <Image
            source={require('../assets/imageDemo.png')}
            resizeMode="cover"
            style={{ height: 50, width: 50, borderRadius: 10 }}
          />
        )}

        <Text style={Styles.headerText}>{title}</Text>

        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <MaterialCommunityIcons name="menu" size={35} color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  headerText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 24,
    marginRight: 10,
  },
});
