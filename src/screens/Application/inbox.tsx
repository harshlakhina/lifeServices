import {
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import { HomeMockData } from '../home-mock-data';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/themecontext';
import { imageSource, string } from '../../constants';

export const Inbox = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <FlatList
      data={HomeMockData}
      contentContainerStyle={[
        Styles.flatListContainer,
        { backgroundColor: theme.background2 },
      ]}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <View
            style={[Styles.menuItemContainer, { backgroundColor: theme.card }]}
          >
            <View style={Styles.menuItemBodyContainer}>
              <View>
                <Image
                  source={{ uri: item.photoUrl }}
                  style={Styles.menuItemImage}
                  resizeMode="cover"
                />
                <View style={Styles.checkImageContainer}>
                  <Image
                    source={imageSource.checkFill}
                    style={Styles.checkImage}
                    resizeMode="contain"
                  />
                </View>
              </View>

              <View style={Styles.infoContainer}>
                <Text style={[Styles.nameText, { color: theme.text }]}>
                  {item.name}
                </Text>

                <Text style={Styles.addressText}>st. Tverskaya, 13</Text>

                <View style={Styles.searchRow}>
                  <Text style={Styles.searchLabel}>Search:</Text>
                  <Text style={Styles.searchValue}>Lawyer</Text>
                </View>
              </View>
            </View>

            <Text style={Styles.description} numberOfLines={2}>
              {item.description}
            </Text>

            <View style={Styles.BtnsContainer}>
              <TouchableOpacity style={[Styles.Btns, Styles.acceptBtn]}>
                <Text style={Styles.acceptText}>{string.button.accept}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[Styles.Btns, { backgroundColor: theme.background }]}
              >
                <Text style={[Styles.rejectText, { color: theme.text }]}>
                  {string.button.reject}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    />
  );
};

const Styles = StyleSheet.create({
  flatListContainer: { gap: 10, padding: 20 },
  menuItemContainer: {
    width: '100%',
    borderRadius: 20,
    padding: 20,
    gap: 20,
  },
  menuItemBodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuItemImage: {
    width: 95,
    height: 96,
    borderRadius: 15,
    position: 'relative',
  },
  checkImageContainer: { position: 'absolute', right: -43, top: -8 },
  checkImage: { height: 30 },
  infoContainer: {
    width: '65%',
    gap: 10,
  },

  nameText: {
    fontSize: 19,
    fontWeight: '700',
  },

  addressText: {
    color: '#66737F',
    fontSize: 13,
  },

  searchRow: {
    flexDirection: 'row',
  },

  searchLabel: {
    fontSize: 20,
    color: '#66737F',
  },

  searchValue: {
    fontSize: 20,
    color: '#07C0E0',
  },
  description: {
    color: '#66737F',
    fontSize: 16,
  },
  BtnsContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 12,
  },
  Btns: {
    flex: 1,
    paddingVertical: 18,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptBtn: {
    backgroundColor: '#02D1AC',
  },

  acceptText: {
    color: '#FFFFFF',
    fontSize: 19,
  },

  rejectText: {
    fontSize: 19,
  },
});
