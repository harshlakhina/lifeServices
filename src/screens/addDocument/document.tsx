import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
} from 'react-native';
import { RHFTextInput } from '../../hookform/rhfTextInput';
import { Select } from '../../hookform/select';
import { countries } from '../../constants/countries';
import { FormProvider, useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from '../../components/button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Divider from '../../components/Divider';
import ImagePicker from 'react-native-image-crop-picker';
import RequestCameraPermission from '../../components/cameraPermission';
import Header2 from '../../components/header2';
import { ThemeContext } from '../../theme/themecontext';
import { iconSource, imageSource, string } from '../../constants';

function AddDocument() {
  const { theme } = useContext(ThemeContext);
  const methods = useForm();
  const [image, setImage] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const openCamera = async () => {
    const getPermission = await RequestCameraPermission();

    if (!getPermission) {
      console.log('Camera permission denied');
      return;
    }
    try {
      const ImageSelected = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      });
      console.log(ImageSelected.path);
      setImage(ImageSelected.path);
      setOpenModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const openPicker = async () => {
    try {
      const ImageSelected = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: false,
      });
      console.log(ImageSelected.path);
      setImage(ImageSelected.path);
      setOpenModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormProvider {...methods}>
      <Modal transparent={true} visible={openModal}>
        <View
          style={[
            {
              backgroundColor: theme.modalBg,
            },
            Styles.modalMainContainer,
          ]}
        >
          <View style={Styles.modalSmallContainer}>
            <View style={Styles.modalSmallContainerCard}>
              <TouchableOpacity
                style={Styles.modalContainerPhotoPicker}
                onPress={openCamera}
              >
                <MaterialCommunityIcons
                  name="camera"
                  size={28}
                  color="#07C0E0"
                />
                <Text style={Styles.modalText}>
                  {string.addDocument.openCamera}
                </Text>
              </TouchableOpacity>

              <Divider />
              <TouchableOpacity
                style={Styles.modalContainerPhotoPicker}
                onPress={openPicker}
              >
                <MaterialCommunityIcons name="file" size={28} color="#07C0E0" />
                <Text style={Styles.modalText}>
                  {string.addDocument.useLastPhoto}
                </Text>
              </TouchableOpacity>
              <Divider />
              <TouchableOpacity
                style={Styles.modalContainerPhotoPicker}
                onPress={openPicker}
              >
                <Image
                  source={imageSource.privacyPolicy}
                  resizeMode="contain"
                  style={Styles.modalFileImage}
                />
                <Text style={Styles.modalText}>
                  {string.addDocument.chooseFromLibrary}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={Styles.modalCancelBtnContainer}
              onPress={() => setOpenModal(false)}
            >
              <Text style={Styles.modalCancelBtnText}>
                {string.button.cancel}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Header2 title={string.addDocument.addDocument} />

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
          <RHFTextInput
            name="name"
            style={Styles.inputWidth}
            placeholder={string.addDocument.name}
          />

          <Select
            title={string.addDocument.documentType}
            options={countries}
            name="documentType"
            style={Styles.inputWidth}
            wrapperStyle={Styles.selectWrapperStyle}
            selected={true}
          />

          <RHFTextInput
            name={string.addDocument.description}
            style={Styles.inputWidth}
            placeholder="Description"
            multiline
          />

          {!image ? (
            <TouchableOpacity style={Styles.profileDemoContainer}>
              <View>
                <TouchableOpacity
                  onPress={() => setOpenModal(true)}
                  style={[
                    { backgroundColor: theme.input },
                    Styles.profileDemoImageContainer,
                  ]}
                >
                  <Image
                    source={iconSource.addPhotoIcon}
                    style={[
                      { tintColor: theme.bottomTab },
                      Styles.profileDemoImage,
                    ]}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <View style={Styles.profileDemoPlusContainer}>
                  <MaterialCommunityIcons
                    name="plus"
                    size={24}
                    color={theme.background}
                  />
                </View>
              </View>
              <Text style={Styles.addYourPhotoText}>
                {string.addDocument.attachPhoto}
              </Text>
            </TouchableOpacity>
          ) : (
            <Image
              source={{ uri: image }}
              resizeMode="cover"
              style={Styles.selectedImage}
            />
          )}

          {image && (
            <View style={Styles.changePhotoContainer}>
              <TouchableOpacity onPress={openPicker}>
                <Text style={Styles.changePhototext}>
                  {string.addDocument.changePhoto}
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <Button
            title={string.button.submitForReview}
            styleBtn={Styles.btnWidth}
          />
        </View>
      </KeyboardAwareScrollView>
    </FormProvider>
  );
}

export default AddDocument;

const Styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  mainContainer: {
    padding: 20,
    gap: 20,
    alignItems: 'center',
  },
  inputWidth: { width: '100%' },
  selectWrapperStyle: { alignItems: 'center' },

  // input: {
  //   backgroundColor: 'white',
  //   elevation: 5,
  //   width: '80%',
  //   borderRadius: 30,
  //   height: 60,
  //   paddingHorizontal: 20,
  //   justifyContent: 'center',
  // },
  profileDemoContainer: { alignItems: 'center', paddingTop: 20, gap: 15 },
  profileDemoImageContainer: {
    height: 120,
    width: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  profileDemoImage: { height: 55, width: 55 },
  profileDemoPlusContainer: {
    position: 'absolute',
    right: -8,
    top: -13,
    backgroundColor: '#07C0E0',
    height: 35,
    width: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addYourPhotoText: { color: '#07C0E0', fontSize: 20 },

  changePhotoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 110,
    backgroundColor: '#07C0E0',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 35,
  },
  changePhototext: { color: '#FFF' },
  selectedImage: { height: 400, width: 370, borderRadius: 40 },

  modalMainContainer: { flex: 1 },
  modalSmallContainer: {
    width: '100%',
    padding: 15,
    bottom: 0,
    position: 'absolute',
    gap: 10,
  },
  modalSmallContainerCard: { backgroundColor: '#FFF', borderRadius: 25 },
  modalText: { fontSize: 17, color: '#141414', fontWeight: 600 },
  modalFileImage: { height: 28, width: 28, tintColor: '#07C0E0' },
  modalCancelBtnContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
  },
  modalCancelBtnText: { textAlign: 'center', fontSize: 20, color: '#07C0E0' },
  modalContainerPhotoPicker: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    padding: 20,
  },

  btnWidth: { width: '97%' },
});
