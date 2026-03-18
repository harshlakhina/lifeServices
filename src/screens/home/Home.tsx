import {
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FormProvider, useForm } from 'react-hook-form';
import { HomeMockData } from '../home-mock-data';
import { Select } from '../../hookform/select';
import { professions } from '../../constants/profession';
import { useState, useRef, useContext } from 'react';
import { Header } from '../../components/header';
import { HomeStyles } from './style';
import { ThemeContext } from '../../theme/themecontext';
import { imageSource, string } from '../../constants';
import { HomeCities } from './mock-data';
import { Routes } from '../../navigation';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();
  const methods = useForm();
  const { theme } = useContext(ThemeContext);

  const [selectedHeart, setSelectedHeart] = useState<number[]>([]);
  const [selectedHeartBestOffer, setSelectedHeartBestOffer] = useState<
    number[]
  >([]);
  const [hideBox, setHideBox] = useState<boolean>(true);
  const hideBoxRef = useRef(true);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const cardwidth = 320;
  const spacing = 17;
  const ITEM_SIZE = cardwidth + spacing;

  function handleSelecedHeartBestOffer(id: number) {
    setSelectedHeartBestOffer(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id],
    );
  }

  function handleSelecedHeart(id: number) {
    setSelectedHeart(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id],
    );
  }

  return (
    <FormProvider {...methods}>
      {/* Header */}
      <Header title={string.home.home} />

      {/* Scrollable Content */}
      <ScrollView
        onScroll={event => {
          const scrollY = event.nativeEvent.contentOffset.y;

          if (scrollY > 100 && hideBoxRef.current) {
            hideBoxRef.current = false;
            setHideBox(false);
          } else if (scrollY <= 100 && !hideBoxRef.current) {
            hideBoxRef.current = true;
            setHideBox(true);
          }
        }}
        contentContainerStyle={{ backgroundColor: theme.background2 }}
      >
        {/* Best Offers */}
        <View style={HomeStyles.bestOfferContainer}>
          <Text style={[HomeStyles.bestOfferText, { color: theme.text }]}>
            {string.home.bestOffers}
          </Text>

          <FlatList
            horizontal
            data={HomeMockData}
            snapToInterval={ITEM_SIZE}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="start"
            decelerationRate="normal"
            disableIntervalMomentum={true}
            contentContainerStyle={HomeStyles.bestOfferListCard}
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
                <View style={HomeStyles.bestOfferListCard}>
                  <Image
                    source={{ uri: item.photoUrl }}
                    style={[
                      HomeStyles.bestOfferCardImage,
                      isActive && HomeStyles.bestOfferActiveStyles,
                    ]}
                    resizeMode="cover"
                  />

                  <View style={HomeStyles.bestOfferCardTopContent}>
                    <Image
                      source={imageSource.checkFill}
                      style={HomeStyles.bestOfferCheckImage}
                      resizeMode="contain"
                    />

                    <TouchableOpacity
                      onPress={() => handleSelecedHeartBestOffer(item.id)}
                    >
                      <View style={HomeStyles.bestOfferCardHeartContainer}>
                        <MaterialCommunityIcons
                          name={ActiveHeart ? 'heart' : 'heart-outline'}
                          size={25}
                          color="#FE5050"
                        />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={HomeStyles.bestOfferCardBottomContainer}>
                    <Text style={HomeStyles.bestOfferCardBottomNameText}>
                      {item.name}
                    </Text>

                    <View style={HomeStyles.bestOfferCardBottomRatingContainer}>
                      <MaterialCommunityIcons
                        name="star-outline"
                        size={25}
                        color="#FFF"
                      />
                      <Text style={HomeStyles.bestOfferCardBottomRatingText}>
                        {item.rating}
                      </Text>
                    </View>

                    <Text
                      style={HomeStyles.bestOfferCardBottomDescText}
                      numberOfLines={2}
                    >
                      {item.description}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>

        <View style={HomeStyles.allOfferContainer}>
          <Text style={[HomeStyles.allOfferText, { color: theme.text }]}>
            {string.home.allOffers}
          </Text>
          {HomeMockData.map(item => {
            const active = selectedHeart.includes(item.id);
            return (
              <TouchableOpacity
                style={[
                  HomeStyles.allOfferListCard,
                  { backgroundColor: theme.card },
                ]}
                key={item.id}
                onPress={() =>
                  navigation.navigate(Routes.AddNewDocument as never)
                }
              >
                <View style={HomeStyles.allOfferListContent}>
                  <View>
                    <Image
                      source={{ uri: item.photoUrl }}
                      style={HomeStyles.allOfferCardLeftImage}
                      resizeMode="cover"
                    />
                    <View
                      style={HomeStyles.allOfferCardCheckFillImageContainer}
                    >
                      <Image
                        source={imageSource.checkFill}
                        style={HomeStyles.allOfferCardCheckFillImage}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                  <View style={HomeStyles.allOfferCardContentContainer}>
                    <Text
                      style={[
                        {
                          color: theme.text,
                        },
                        HomeStyles.allOfferCardNameText,
                      ]}
                    >
                      {item.name}
                    </Text>

                    <View style={HomeStyles.allOfferCardRatingContainer}>
                      <MaterialCommunityIcons
                        name="star-outline"
                        size={25}
                        color="#07C0E0"
                      />
                      <Text style={HomeStyles.allOfferCardRatingText}>
                        {item.rating}
                      </Text>
                    </View>

                    <Text
                      style={HomeStyles.allOfferCardDescriptionText}
                      numberOfLines={2}
                    >
                      {item.description}
                    </Text>
                  </View>

                  <TouchableOpacity onPress={() => handleSelecedHeart(item.id)}>
                    <MaterialCommunityIcons
                      name={active ? 'heart' : 'heart-outline'}
                      size={29}
                      color="#FE5050"
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Top Search Box */}
      {hideBox && (
        <View
          style={[
            HomeStyles.topSearchBox,
            { backgroundColor: theme.background },
          ]}
        >
          <View style={HomeStyles.topSearchBoxContentContainer}>
            <View
              style={[
                HomeStyles.topSearchBoxContainerImageBg,
                { backgroundColor: theme.card2 },
              ]}
            >
              <Image
                source={imageSource.moscow}
                resizeMode="cover"
                style={HomeStyles.topSearchBoxContentContainerImage}
              />
            </View>

            <Select
              name="moscow"
              title={string.home.moscow}
              options={HomeCities}
            />
          </View>

          <View style={HomeStyles.topSearchBoxContentContainer}>
            <View
              style={[
                HomeStyles.topSearchBoxContainerImageBg,
                { backgroundColor: theme.card2 },
              ]}
            >
              <Image
                source={imageSource.sphere}
                resizeMode="contain"
                style={HomeStyles.topSearchBoxContentContainerImage}
              />
            </View>
            <Select
              name="sphere"
              title={string.home.sphere}
              options={professions}
            />
          </View>
        </View>
      )}
    </FormProvider>
  );
};
