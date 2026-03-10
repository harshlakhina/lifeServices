import { Header } from '../../components/header';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeMockData } from '../home-mock-data';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/themecontext';
import { imageSource, string } from '../../constants';

function FavouriteScreen() {
  const { theme } = useContext(ThemeContext);
  return (
    <View>
      <Header title={string.favourite.favourites} />
      <ScrollView
        contentContainerStyle={[
          Styles.scrollContainer,
          { backgroundColor: theme.background2 },
        ]}
      >
        {HomeMockData.map(item => {
          return (
            <View
              style={[
                Styles.menuItemContainer,
                { backgroundColor: theme.card },
              ]}
              key={item.id}
            >
              <View style={Styles.menuItemBodyContainer}>
                <View>
                  <Image
                    source={{ uri: item.photoUrl }}
                    style={Styles.menuItemImage}
                    resizeMode="cover"
                  />
                  <View style={Styles.menuItemCheckImageContainer}>
                    <Image
                      source={imageSource.checkFill}
                      style={Styles.menuItemCheckImage}
                      resizeMode="contain"
                    />
                  </View>
                </View>

                <View style={Styles.menuItemContentContainer}>
                  <Text
                    style={[Styles.menuItemNameText, { color: theme.text }]}
                  >
                    {item.name}
                  </Text>

                  <View style={Styles.menuItemRatingContainer}>
                    <MaterialCommunityIcons
                      name="star-outline"
                      size={25}
                      color="#07C0E0"
                    />
                    <Text style={Styles.menuItemRatingText}>{item.rating}</Text>
                  </View>

                  <Text style={Styles.menuItemDescription} numberOfLines={2}>
                    {item.description}
                  </Text>
                </View>

                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="heart"
                    size={25}
                    color="#FE5050"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default FavouriteScreen;

const Styles = StyleSheet.create({
  scrollContainer: {
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 160,
  },
  menuItemContainer: {
    width: '100%',
    height: 125,
    borderRadius: 20,
  },
  menuItemBodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 18,
    padding: 15,
    width: '97%',
  },
  menuItemImage: {
    width: 95,
    height: 96,
    borderRadius: 15,
    position: 'relative',
  },
  menuItemCheckImageContainer: { position: 'absolute', right: -43, top: -8 },
  menuItemCheckImage: { height: 30 },
  menuItemContentContainer: { width: '57%', gap: 3 },
  menuItemNameText: {
    fontSize: 19,
    fontWeight: '700',
  },
  menuItemRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  menuItemRatingText: { fontSize: 15, color: '#07C0E0' },
  menuItemDescription: { color: '#66737F' },
});
