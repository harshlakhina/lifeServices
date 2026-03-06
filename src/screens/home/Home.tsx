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
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../theme/themecontext';
// import { ThemeContext } from '../../theme/themecontext';

export const Home = () => {
  const methods = useForm();
  const navigation = useNavigation();
  const {theme}=useContext(ThemeContext)

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
      <Header
        title="Home"
        isExpanded={hideBox}
        handleFunction={() => navigation.navigate('Map' as never)}
      />

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
        contentContainerStyle={{backgroundColor:theme.background2}}
      >
        {/* Best Offers */}
        <View style={HomeStyles.bestOfferContainer}>
          <Text style={[HomeStyles.bestOfferText,{color:theme.text}]}> Best Offers</Text>

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
                      isActive && { opacity: 1, height: 400 },
                    ]}
                    resizeMode="cover"
                  />

                  <View style={HomeStyles.bestOfferCardTopContent}>
                    <Image
                      source={require('../../assets/Check.png')}
                      style={{ height: 40 }}
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

        {/* All Offers */}
        <View style={HomeStyles.allOfferContainer}>
         <Text style={[HomeStyles.allOfferText,{color:theme.text}]}>All Offers</Text>

          {HomeMockData.map(item => {
            const active = selectedHeart.includes(item.id);
            return (
              <View style={[HomeStyles.allOfferListCard,{backgroundColor:theme.card}]} key={item.id}>
                <View style={HomeStyles.allOfferListContent}>
                  <View>
                    <Image
                      source={{ uri: item.photoUrl }}
                      style={{
                        width: 95,
                        height: 96,
                        borderRadius: 15,
                        position: 'relative',
                      }}
                      resizeMode="cover"
                    />
                    <View style={{ position: 'absolute', right: -43, top: -8 }}>
                      <Image
                        source={require('../../assets/Check.png')}
                        style={{ height: 30 }}
                        resizeMode="contain"
                      />
                    </View>
                  </View>

                  <View style={{ width: '55%', gap: 3 }}>
                    <Text
                      style={{
                        color: theme.text,
                        fontSize: 17,
                        fontWeight: '700',
                      }}
                    >
                      {item.name}
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 3,
                      }}
                    >
                      <MaterialCommunityIcons
                        name="star-outline"
                        size={25}
                        color="#07C0E0"
                      />
                      <Text style={{ fontSize: 15, color: '#07C0E0' }}>
                        {item.rating}
                      </Text>
                    </View>

                    <Text
                      style={{ color: '#66737F', fontSize: 13 }}
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
              </View>
            );
          })}
        </View>
      </ScrollView>

      {/* Top Search Box */}
      {hideBox && (
        <View style={[HomeStyles.topSearchBox,{backgroundColor:theme.background}]}>
          <View style={HomeStyles.topSearchBoxContentContainer}>
            <View style={[HomeStyles.topSearchBoxContainerImageBg,{backgroundColor:theme.card2}]}>
              <Image
                source={require('../../assets/MoscowIcon.png')}
                resizeMode="cover"
                style={HomeStyles.topSearchBoxContentContainerImage}
              />
            </View>

            <Select
              name="moscow"
              title="Moscow"
              options={professions}
              style={HomeStyles.topSearchBoxContentContainerDrop}
            />
          </View>

          <View style={HomeStyles.topSearchBoxContentContainer}>
            <View style={[HomeStyles.topSearchBoxContainerImageBg,{backgroundColor:theme.card2}]}>
              <Image
                source={require('../../assets/workIcon.png')}
                resizeMode="contain"
                style={HomeStyles.topSearchBoxContentContainerImage}
              />
            </View>
            <Select
              name="sphere"
              title="Sphere"
              options={professions}
              style={[HomeStyles.topSearchBoxContentContainerDrop]}
            />
          </View>
        </View>
      )}
    </FormProvider>
  );
};
