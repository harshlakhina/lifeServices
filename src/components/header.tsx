import React, { useContext } from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../theme/themecontext';
import { imageSource } from '../constants/imageSrc';
import { iconSource } from '../constants';

export const Header = ({ title, handleFunction, setting }: any) => {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);

  const showBack =
    title === 'Create an Application' ||
    title === 'Edit an Application' ||
    (title === 'Profile' && setting);

  return (
    <>
      {title === 'Applications' ? (
        <View style={styles.headerContainer}>
          <Image
            source={imageSource.bgImage}
            resizeMode="cover"
            style={styles.bgImage}
          />
        </View>
      ) : (
        <View
          style={[
            styles.headerContainer,
            { backgroundColor: theme.background2 },
          ]}
        >
          <Image
            source={imageSource.bgImage}
            resizeMode="cover"
            style={[styles.bgImage]}
          />
        </View>
      )}

      <View style={styles.topBar}>
        {/* Left Side */}
        {title === 'Home' && (
          <TouchableOpacity onPress={handleFunction}>
            <Image
              source={iconSource.profileWhiteColor}
              style={styles.profileIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

        {title === 'Profile' && !setting && (
          <TouchableOpacity
            style={styles.editContainer}
            onPress={handleFunction}
          >
            <Image source={iconSource.editIcon} style={styles.editIcon} />
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        )}

        {showBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={iconSource.backIcon} style={styles.backIcon} />
          </TouchableOpacity>
        )}

        {title === 'Applications' && (
          <Image source={imageSource.imageDemo2} style={styles.profileImage} />
        )}

        {/* Title */}
        <Text style={styles.headerText}>{title}</Text>

        {/* Hamburger */}
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <MaterialCommunityIcons name="menu" size={35} color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 140,
    width: '100%',
  },

  bgImage: {
    width: '100%',
  },

  topBar: {
    position: 'absolute',
    top: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },

  headerText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 24,
  },

  profileIcon: {
    height: 28,
    width: 28,
    color: '#fff',
  },

  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },

  editIcon: {
    height: 29,
    width: 29,
    tintColor: '#FFF',
  },

  editText: {
    color: '#FFF',
    fontSize: 14,
  },

  backIcon: {
    height: 20,
    width: 30,
    tintColor: '#FFF',
  },

  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
});
