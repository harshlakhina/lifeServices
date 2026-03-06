import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ViewAllDocuments } from './mock-data';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from '../../components/button';
import Header2 from '../../components/header2';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/themecontext';

function ViewAllDocument() {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header2 title="Documents" />

      <ScrollView
        contentContainerStyle={{
          padding: 20,
          gap: 15,
          backgroundColor: theme.background2,
        }}
      >
        {ViewAllDocuments.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                flexDirection: 'row',
                backgroundColor: theme.card,
                padding: 15,
                borderRadius: 25,
                gap: 10,
                marginRight: 10,
                marginTop: 10,
              }}
              onPress={() => navigation.navigate('EditApplication' as never)}
            >
              <Image
                source={require('../../assets/Diploma.png')}
                resizeMode="cover"
                style={{ height: 100, width: 100, borderRadius: 20 }}
              />
              <View style={{ position: 'absolute', right: -10, top: -7 }}>
                {item.status === 'fulfilled' && (
                  <Image
                    source={require('../../assets/Check.png')}
                    style={{ height: 31, width: 31 }}
                    resizeMode="contain"
                  />
                )}

                {item.status === 'pending' && (
                  <View
                    style={{
                      backgroundColor: '#FFA23A',
                      height: 30,
                      width: 30,
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      source={require('../../assets/pendingStatus.png')}
                      style={{ height: 19, width: 30 }}
                      resizeMode="contain"
                    />
                  </View>
                )}

                {item.status === 'rejected' && (
                  <View
                    style={{
                      backgroundColor: '#FE5050',
                      height: 30,
                      width: 30,
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <MaterialCommunityIcons
                      name="close"
                      size={22}
                      style={{ color: '#FFF' }}
                    />
                  </View>
                )}
              </View>

              <View style={{ width: 170, gap: 5 }}>
                <Text
                  style={{ fontWeight: 900, fontSize: 16, color: theme.text }}
                >
                  {item.diplomaName}
                </Text>

                <Text
                  numberOfLines={2}
                  style={{ color: '#9999AA', fontSize: 15 }}
                >
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}

        <Button
          title="Add new document"
          styleBtn={{ width: '97%' }}
          handleBtn={() => navigation.navigate('CreateAnApplication' as never)}
        />
      </ScrollView>
    </>
  );
}

export default ViewAllDocument;
