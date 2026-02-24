import { Header } from '../../components/header';
import {
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeMockData } from '../home-mock-data';
import { FavouriteStyles } from './styles';
import { useState } from 'react';

function FavouriteScreen() {
  // const [selectedHeart,setSelectedHeart]=useState<number []>([])
  // function handleSelectedHeart(id:number){
  //   setSelectedHeart((prev)=>{
  //     return prev.includes(id)?prev.filter((id1)=>id1!==id):[...prev,id]
  //   })

  return (
    <View>
      <Header title="Favourites" />
      <ScrollView
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 20,
          paddingVertical: 60,
          paddingBottom: 110,
        }}
      >
        {HomeMockData.map(item => {
          // const activeHeart=selectedHeart.includes(item.id)
          return (
            <View style={FavouriteStyles.allOfferListCard} key={item.id}>
              <View style={FavouriteStyles.allOfferListContent}>
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
                      color: '#141414',
                      fontSize: 19,
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

                  <Text style={{ color: '#66737F' }} numberOfLines={2}>
                    {item.description}
                  </Text>
                </View>

                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="heart"
                    size={29}
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
