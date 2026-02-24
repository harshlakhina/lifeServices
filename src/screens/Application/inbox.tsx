import {
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import { HomeMockData } from '../home-mock-data';
import { InboxStyles } from './styles';

export const Inbox = () => {
  return (
    <FlatList
      data={HomeMockData}
      contentContainerStyle={InboxStyles.allOfferListContainer}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <View style={InboxStyles.allOfferListCard}>
            <View style={InboxStyles.allOfferListContent}>
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

              <View style={{ width: '55%', gap: 10 }}>
                <Text
                  style={{
                    color: '#141414',
                    fontSize: 19,
                    fontWeight: '700',
                  }}
                >
                  {item.name}
                </Text>

                <Text>st. Tverskaya, 13</Text>

                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 20, color: '#66737F' }}>
                    Search:
                  </Text>
                  <Text style={{ fontSize: 20, color: '#07C0E0' }}>Lawyer</Text>
                </View>
              </View>
            </View>

            <Text style={{ fontSize: 15, color: '#66737F' }} numberOfLines={2}>
              {item.description}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                gap: 5,
              }}
            >
              <TouchableOpacity
                style={[Styles.button, { backgroundColor: '#02D1AC' }]}
              >
                <Text style={[Styles.buttonText, { color: '#FFF' }]}>
                  Accept
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[Styles.button, { backgroundColor: '#F5F6F9' }]}
              >
                <Text style={Styles.buttonText}>Reject</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    />
  );
};

const Styles = StyleSheet.create({
  button: {
    padding: 15,
    flex: 1,
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
  },
});
