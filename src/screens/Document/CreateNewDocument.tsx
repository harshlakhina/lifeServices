import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header } from '../../components/header';
import { FormProvider, useForm } from 'react-hook-form';
import { Select } from '../../hookform/select';
import { professions } from '../../constants/profession';
import { RHFTextInput } from '../../hookform/rhfTextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '../../components/button';
import ImagePicker from 'react-native-image-crop-picker';
import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../theme/themecontext';
import { iconSource, string } from '../../constants';
import { Routes } from '../../navigation';

function CreateNewDocument() {
  const { theme } = useContext(ThemeContext);
  const methods = useForm();
  const navigation = useNavigation();
  const [image, setImage] = useState<string[]>([]);
  const [activeTrash, setActiveTrash] = useState<number | null>(null);

  const openPicker = async () => {
    try {
      const ImageSelected = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: false,
      });
      console.log(ImageSelected.path);
      setImage(prev => {
        return [...prev, ImageSelected.path];
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <FormProvider {...methods}>
      <Header title={string.createNewDocument.createAnApplication} />

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
          <Select
            title={string.createNewDocument.createAnApplication}
            options={professions}
            name="profession"
            style={Styles.inputWidth}
            wrapperStyle={Styles.selectWrapperStyle}
            selected={true}
          />
          <RHFTextInput
            placeholder={string.createNewDocument.phoneNoPlaceholder}
            name="PhoneNo"
            style={Styles.inputWidth}
            keyboardType="phone-pad"
          />
          <RHFTextInput
            placeholder={string.createNewDocument.description}
            name="description"
            style={Styles.inputWidth}
            multiline
          />
          {image.length > 0 && (
            <FlatList
              data={image}
              horizontal={true}
              contentContainerStyle={Styles.scrollAllImageContainer}
              renderItem={({ item, index }) => {
                const active = activeTrash === index;
                return (
                  <TouchableOpacity
                    style={Styles.allImagecontainer}
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
                              { tintColor: theme.text },
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
          )}
          {image.length > 0 && (
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.ViewAllPhotos as never)}
            >
              <Text style={Styles.viewPhotoText}>
                {string.createNewDocument.viewPhoto}
              </Text>
            </TouchableOpacity>
          )}

          <View style={Styles.profileImageDemoContainer}>
            <TouchableOpacity
              onPress={() => openPicker()}
              style={[
                {
                  backgroundColor: theme.card,
                },
                Styles.profileUploadBox,
              ]}
            >
              <Image
                source={iconSource.addPhotoIcon}
                style={[
                  { tintColor: theme.bottomTab },
                  Styles.profileUploadIcon,
                ]}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => openPicker()}
              style={Styles.plusButton}
            >
              <MaterialCommunityIcons
                name="plus"
                size={24}
                color={theme.background}
              />
            </TouchableOpacity>

            <Text style={Styles.attachPhotoText}>
              {string.createNewDocument.attachPhoto}
            </Text>
          </View>

          <Button
            title={string.button.submitAnApplication}
            styleBtn={Styles.btnWidth}
            handleBtn={() => navigation.navigate('ViewDocument' as never)}
          />
        </View>
      </KeyboardAwareScrollView>
    </FormProvider>
  );
}

export default CreateNewDocument;

const Styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  mainContainer: {
    padding: 20,
    gap: 20,
    alignItems: 'center',
  },
  inputWidth: { width: '100%' },
  selectWrapperStyle: { alignItems: 'center' },

  scrollAllImageContainer: { gap: 15 },
  allImagecontainer: {
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
  trashImage: {
    height: 50,
    width: 50,
  },
  viewPhotoText: { fontSize: 20, color: '#07C0E0' },

  profileImageDemoContainer: {
    marginTop: 45,
  },
  profileUploadBox: {
    height: 120,
    width: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  profileUploadIcon: {
    height: 65,
    width: 65,
  },
  plusButton: {
    position: 'absolute',
    right: -10,
    top: -13,
    backgroundColor: '#07C0E0',
    height: 35,
    width: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  attachPhotoText: {
    color: '#07C0E0',
    marginTop: 10,
    marginBottom: 40,
    fontSize: 20,
  },
  btnWidth: { width: '97%' },
});
