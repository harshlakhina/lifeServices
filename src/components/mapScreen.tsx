import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeMockData } from '../screens/home-mock-data';
import { ThemeContext } from '../theme/themecontext';
import { iconSource, imageSource } from '../constants';

const MapScreen = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeMapPage, setActiveMapPage] = useState<string>('');
  const [selectedHeartBestOffer, setSelectedHeartBestOffer] = useState<
    number[]
  >([]);

  function handleSelecedHeartBestOffer(id: number) {
    setSelectedHeartBestOffer(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id],
    );
  }

  const cardwidth = 170;
  const ITEM_SIZE = cardwidth;

  const skills = [
    'Pediatrician',
    'Stylist',
    'Lawyer',
    'Teacher',
    'Engineer',
    'Software Developer',
    'Graphic Designer',
    'Photographer',
    'Accountant',
    'Chef',
  ];

  return (
    <View style={HomeStyles.container}>
      <MapView
        provider="google"
        style={HomeStyles.map}
        initialRegion={{
          latitude: 28.6139,
          longitude: 77.209,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{
            latitude: 28.6139,
            longitude: 77.209,
          }}
          title="Delhi"
          description="This is Delhi"
        />
      </MapView>

      <View style={{ position: 'absolute', bottom: 60 }}>
        <FlatList
          horizontal
          data={HomeMockData}
          snapToInterval={ITEM_SIZE}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start"
          decelerationRate="normal"
          disableIntervalMomentum={true}
          onScroll={event => {
            const scrollValue = event.nativeEvent.contentOffset.x;
            const index = Math.round(scrollValue / cardwidth);
            setActiveIndex(index);
          }}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => {
            const isActive = activeIndex === index;
            const ActiveHeart = selectedHeartBestOffer.includes(item.id);
            return (
              <View style={HomeStyles.ListCard}>
                <View>
                  <View style={HomeStyles.cardImageContainer}>
                    <Image
                      source={{ uri: item.photoUrl }}
                      style={[
                        HomeStyles.CardImage,
                        isActive && { opacity: 1, height: 230 },
                      ]}
                      resizeMode="cover"
                    />
                  </View>

                  <View style={HomeStyles.CardTopContent}>
                    <Image
                      source={imageSource.checkFill}
                      style={{ height: 30, width: 30 }}
                      resizeMode="contain"
                    />

                    <TouchableOpacity
                      onPress={() => handleSelecedHeartBestOffer(item.id)}
                    >
                      <View style={HomeStyles.CardHeartContainer}>
                        <MaterialCommunityIcons
                          name={ActiveHeart ? 'heart' : 'heart-outline'}
                          size={18}
                          color="#FE5050"
                        />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={HomeStyles.CardBottomContainer}>
                    <Text style={HomeStyles.CardBottomNameText}>
                      {item.name}
                    </Text>

                    <View style={HomeStyles.CardBottomRatingContainer}>
                      <MaterialCommunityIcons
                        name="star-outline"
                        size={25}
                        color="#FFF"
                      />
                      <Text style={HomeStyles.CardBottomRatingText}>
                        {item.rating}
                      </Text>
                    </View>

                    <Text
                      style={HomeStyles.CardBottomDescText}
                      numberOfLines={2}
                    >
                      {item.description}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          paddingTop: 50,
          alignItems: 'center',
          gap: 12,
          position: 'absolute',
          backgroundColor: theme.map,
          width: '100%',
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: '30%' }}
        >
          <Image
            source={iconSource.backIcon}
            resizeMode="contain"
            style={{ height: 22, width: 40, tintColor: '#07C0E0' }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            color: theme.text,
            fontWeight: 700,
            width: '60%',
          }}
          numberOfLines={1}
        >
          Next to me
        </Text>
      </View>

      <View
        style={{
          top: 100,
          position: 'absolute',
          padding: 10,
        }}
      >
        <FlatList
          data={skills}
          keyExtractor={item => item.toString()}
          horizontal
          contentContainerStyle={{ gap: 15 }}
          renderItem={({ item }) => {
            const activePage = item === activeMapPage;
            return (
              <TouchableOpacity
                onPress={() => setActiveMapPage(item)}
                style={{
                  backgroundColor: activePage ? '#07C0E0' : theme.background,
                  padding: 13,
                  borderRadius: 30,
                  paddingHorizontal: 35,
                }}
              >
                <Text
                  style={{
                    color: activePage ? '#FFF' : theme.primaryText,
                    fontSize: 17,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MapScreen;

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  ListCard: { paddingLeft: 17, justifyContent: 'center' },
  cardImageContainer: { backgroundColor: '#FFF', borderRadius: 30 },
  CardImage: {
    width: 180,
    height: 200,
    borderRadius: 30,
    position: 'relative',
    opacity: 0.7,
  },
  CardTopContent: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  CardHeartContainer: {
    backgroundColor: '#FFF',
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardBottomContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 15,
  },
  CardBottomNameText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '900',
  },
  CardBottomRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  CardBottomRatingText: { fontSize: 17, color: '#FFF' },
  CardBottomDescText: { color: '#FFF' },
});
