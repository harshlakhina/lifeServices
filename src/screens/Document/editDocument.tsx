import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Header } from '../../components/header';
import { FormProvider, useForm } from 'react-hook-form';

import { RHFTextInput } from '../../hookform/rhfTextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '../../components/button';

import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../theme/themecontext';
import { iconSource, imageSource, string } from '../../constants';

function EditDocument() {
  const { theme } = useContext(ThemeContext);
  const methods = useForm();
  const navigation = useNavigation();

  const [activeTrash, setActiveTrash] = useState<number | null>(null);
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
    <FormProvider {...methods}>
      <Header title={string.editAnApplication.editAnApplication} />

      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraScrollHeight={50}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          {
            backgroundColor: theme.background,
          },
          Styles.scrollContainer,
        ]}
      >
        <View style={Styles.mainContainer}>
          <View style={Styles.statusContainer}>
            <View style={Styles.statusContainerLeftItem}>
              <View style={Styles.statusTextContainer}>
                <Text style={Styles.statusText}>Status :</Text>

                <Text style={Styles.statusText}>Confirmed</Text>
              </View>

              <Image
                source={imageSource.checkFill}
                style={Styles.fullFillImage}
                resizeMode="contain"
              />
            </View>
          </View>

          <RHFTextInput
            placeholder="+7 (899) 355 76"
            name="PhoneNo"
            style={Styles.inputWidth}
            keyboardType="phone-pad"
          />
          <RHFTextInput
            placeholder="Hello, I need an invitation design for the wedding."
            name="description"
            style={Styles.inputWidth}
            multiline
          />

          <View style={Styles.photoListContainer}>
            <FlatList
              data={photoUrls}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={Styles.photoList}
              renderItem={({ item, index }) => {
                const active = activeTrash === index;
                return (
                  <TouchableOpacity
                    style={Styles.container}
                    onPress={() => setActiveTrash(index)}
                  >
                    <Image
                      source={{ uri: item }}
                      resizeMode="cover"
                      style={Styles.image}
                    />

                    {active && (
                      <View style={Styles.trashContainer}>
                        <TouchableOpacity onPress={() => setActiveTrash(null)}>
                          <Image
                            source={iconSource.trashOutline}
                            resizeMode="cover"
                            style={[
                              {
                                tintColor: theme.text,
                              },
                              Styles.trashImage,
                            ]}
                          />
                        </TouchableOpacity>
                      </View>
                    )}
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ViewAllPhoto' as never)}
          >
            <Text style={Styles.viewPhotoText}>
              {string.editAnApplication.viewPhoto}
            </Text>
          </TouchableOpacity>

          <Button
            title={string.button.confirmAnApplication}
            styleBtn={Styles.btnContainer}
            handleBtn={() => navigation.navigate('ViewDocument' as never)}
          />
        </View>
      </KeyboardAwareScrollView>
    </FormProvider>
  );
}

export default EditDocument;

const Styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  mainContainer: {
    padding: 20,
    gap: 20,
    alignItems: 'center',
  },
  statusContainer: {
    backgroundColor: '#38C976',
    width: '100%',
    borderRadius: 30,
  },
  statusContainerLeftItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 13,
  },
  statusTextContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  statusText: {
    color: '#FFF',
    fontSize: 17,
  },
  fullFillImage: {
    height: 35,
    width: 35,
  },

  inputWidth: {
    width: '100%',
  },

  photoListContainer: {
    height: 130,
  },
  photoList: {
    gap: 10,
  },

  container: {
    width: 120,
    height: 120,
    borderRadius: 20,
    position: 'relative',
  },
  image: { width: '100%', height: '100%', borderRadius: 20 },
  trashContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  trashImage: { height: 50, width: 50 },
  viewPhotoText: { fontSize: 20, color: '#07C0E0' },
  btnContainer: { width: '97%', marginTop: 70 },
});
