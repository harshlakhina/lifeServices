import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView contentContainerStyle={{ paddingTop: 0 }}>
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
                size={29}
                color="#FFF"
              />
              <Text style={{ color: '#FFF', fontSize: 19 }}> 5.6</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ marginTop: -50 }}>
        <DrawerItemList {...props} />
      </View>

      <View style={{ alignItems: 'flex-end' }}>
        <View
          style={{
            backgroundColor: '#FFE2E2',
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
