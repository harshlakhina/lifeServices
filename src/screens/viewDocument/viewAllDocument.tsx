import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ViewAllDocuments } from './mock-data';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from '../../components/button';
import Header2 from '../../components/header2';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/themecontext';
import { imageSource, string } from '../../constants';
import { Routes } from '../../navigation';

function ViewAllDocument() {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header2 title={string.viewAllDocument.documents} />

      <ScrollView
        contentContainerStyle={[
          {
            backgroundColor: theme.background2,
          },
          Styles.scrollContainer,
        ]}
      >
        {ViewAllDocuments.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              style={[{ backgroundColor: theme.card }, Styles.cardContainer]}
              onPress={() => navigation.navigate(Routes.EditDocument as never)}
            >
              <Image
                source={imageSource.diploma}
                resizeMode="cover"
                style={Styles.cardContainerLeftImage}
              />
              <View style={Styles.cardStatusContainer}>
                {item.status === 'fulfilled' && (
                  <Image
                    source={imageSource.checkFill}
                    style={Styles.cardFullFillImage}
                    resizeMode="contain"
                  />
                )}

                {item.status === 'pending' && (
                  <View style={Styles.cardPedningContainer}>
                    <Image
                      source={imageSource.pending}
                      style={Styles.cardPendingImage}
                      resizeMode="contain"
                    />
                  </View>
                )}

                {item.status === 'rejected' && (
                  <View style={Styles.cardRejectedContainer}>
                    <MaterialCommunityIcons
                      name="close"
                      size={22}
                      style={Styles.cardRejectedClose}
                    />
                  </View>
                )}
              </View>

              <View style={Styles.cardContentContainer}>
                <Text
                  style={[{ color: theme.text }, Styles.cardContentNameText]}
                >
                  {item.diplomaName}
                </Text>

                <Text
                  numberOfLines={2}
                  style={Styles.cardContentDescriptionText}
                >
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}

        <Button
          title={string.button.addNewDocument}
          styleBtn={Styles.btn}
          handleBtn={() => navigation.navigate(Routes.AddNewDocument as never)}
        />
      </ScrollView>
    </>
  );
}

export default ViewAllDocument;

const Styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    gap: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 25,
    gap: 10,
    marginRight: 10,
    marginTop: 10,
  },
  cardContainerLeftImage: { height: 100, width: 100, borderRadius: 20 },
  cardContentContainer: { width: '55%', gap: 5 },
  cardContentNameText: { fontWeight: 900, fontSize: 16 },
  cardContentDescriptionText: { color: '#9999AA', fontSize: 15 },
  cardStatusContainer: { position: 'absolute', right: -10, top: -7 },
  cardFullFillImage: { height: 31, width: 31 },
  cardPedningContainer: {
    backgroundColor: '#FFA23A',
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardPendingImage: { height: 19, width: 30 },
  cardRejectedContainer: {
    backgroundColor: '#FE5050',
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardRejectedClose: { color: '#FFF' },
  btn: { width: '97%' },
});
