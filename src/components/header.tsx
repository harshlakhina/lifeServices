import React, { useContext } from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../theme/themecontext';
import {imageSource} from '../constants/imageSrc';
import { iconSource } from '../constants';

export const Header = ({ title, isExpanded, handleFunction, setting }: any) => {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {title === 'Home' && (
        <View
          style={{
            height: 140,
            width: '100%',
            backgroundColor: theme.background2,
          }}
        >
          <Image
            source={imageSource.bgImage}
            resizeMode="cover"
            style={{ width: '100%', height: isExpanded ? 320 : 180 }}
          />
        </View>
      )}
      {title === 'Profile' && (
        <View
          style={{
            height: 137,
            width: '100%',
            backgroundColor: theme.background2,
          }}
        >
          <Image
            source={imageSource.bgImage}
            resizeMode="cover"
            style={{ width: '100%', height: isExpanded ? 450 : 180 }}
          />
        </View>
      )}

      {title === 'Application' && (
        <View style={{ height: 150, width: '100%' }}>
          <Image
           source={imageSource.bgImage}
            resizeMode="cover"
            style={{
              width: '100%',
              height: 300,
              backgroundColor: theme.background2,
            }}
          />
        </View>
      )}
      {title === 'Favourites' && (
        <View
          style={{
            height: 150,
            width: '100%',
            backgroundColor: theme.background2,
          }}
        >
          <Image
            source={imageSource.bgImage}
            resizeMode="cover"
            style={{ width: '100%', height: 200 }}
          />
        </View>
      )}
      {title === 'Create an Application' && (
        <View
          style={{
            height: 140,
            width: '100%',
            backgroundColor: theme.background,
          }}
        >
          <Image
            source={imageSource.bgImage}
            resizeMode="cover"
            style={{ width: '100%', height: 180 }}
          />
        </View>
      )}
      {title === 'Edit an Application' && (
        <View
          style={{
            height: 140,
            width: '100%',
            backgroundColor: theme.background,
          }}
        >
          <Image
            source={imageSource.bgImage}
            resizeMode="cover"
            style={{ width: '100%', height: 180 }}
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
          // backgroundColor:"red"
        }}
      >
        {title === 'Home' && (
          <TouchableOpacity onPress={handleFunction}>
            <Image
              source={iconSource.mapIcon}
              resizeMode="contain"
              style={{ height: 35, width: 30 }}
            />
          </TouchableOpacity>
        )}

        {title === 'Profile' && !setting && (
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}
            onPress={handleFunction}
          >
            <Image
              source={iconSource.editIcon}
              style={{ height: 29, width: 29, tintColor: '#FFF' }}
            />
            <Text style={{ color: '#FFF', fontSize: 14 }}>Edit</Text>
          </TouchableOpacity>
        )}

        {title === 'Profile' && setting && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            // style={{ width: '30%' }}
          >
            <Image
              source={iconSource.backIcon}
              resizeMode="contain"
              style={{ height: 20, width: 30, tintColor: '#FFF' }}
            />
          </TouchableOpacity>
        )}

        {title === 'Create an Application' && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={iconSource.backIcon}
              resizeMode="contain"
              style={{ height: 20, width: 30, tintColor: '#FFF' }}
            />
          </TouchableOpacity>
        )}

        {title === 'Edit an Application' && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
                 source={iconSource.backIcon}
              resizeMode="contain"
              style={{ height: 20, width: 30, tintColor: '#FFF' }}
            />
          </TouchableOpacity>
        )}

        {title === 'Application' && (
          <Image
            source={imageSource.imageDemo2}
            resizeMode="cover"
            style={{ height: 50, width: 50, borderRadius: 10 }}
          />
        )}

        <Text style={Styles.headerText}>{title}</Text>

        {
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <MaterialCommunityIcons name="menu" size={35} color="#FFF" />
          </TouchableOpacity>
        }
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
