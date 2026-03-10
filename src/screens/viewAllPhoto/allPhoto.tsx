import { useContext, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header2 from '../../components/header2';
import { ThemeContext } from '../../theme/themecontext';
import { string } from '../../constants';

function ViewAllPhoto() {
  const {theme}=useContext(ThemeContext)
  const [activePhoto, setActivePhoto] = useState({ active: false, file: '' });
  const photoUrls = [
    'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800',
    'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=800',
    'https://images.unsplash.com/photo-1604480133080-602261a680df?w=800',
    'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=800',
    'https://images.unsplash.com/photo-1549476464-37392f717541?w=800',
    'https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?w=800',
    'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=800',
    'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=800',
    'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800',
  ];
  return (
    <>
      <Modal transparent={false} visible={activePhoto.active}>
        <View style={{backgroundColor:theme.background}}>
          <Image
            source={{
              uri: activePhoto.file,
            }}
            resizeMode="contain"
            style={Styles.ModalImage}
          />

          <View style={Styles.closeIconContainer}>
            <TouchableOpacity
              onPress={() =>
                setActivePhoto({
                  active: false,
                  file: '',
                })
              }
            >
              <MaterialCommunityIcons name="close" size={40} color={theme.primaryText}/>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Header2 title={string.viewAllPhoto.viewPhoto}/>

      <ScrollView contentContainerStyle={{ padding: 10,paddingTop:40 ,backgroundColor:theme.background,flex:1}}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 15 }}>
          {photoUrls.map(item => (
            <View>
              <TouchableOpacity
                onPress={() =>
                  setActivePhoto({
                    active: true,
                    file: item,
                  })
                }
              >
                <Image
                  source={{ uri: item }}
                  resizeMode="cover"
                  style={{ height: 120, width: 120, borderRadius: 20 }}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

export default ViewAllPhoto;

const Styles = StyleSheet.create({
  ModalImage: { height: '100%', width: '100%', position: 'relative' },
  closeIconContainer: { position: 'absolute', right: 0 },
  headerContainer: {
    marginTop: 55,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    gap: 10,
  },
  backIconContainer: { width: '30%' },
  backIconImage: { height: 22, width: 40, tintColor: '#07C0E0' },
  headerText: {
    fontSize: 25,
    color: '#141414',
    fontWeight: 700,
    width: '60%',
  },
  flatListContainer: { gap: 10, padding: 20 },
});
