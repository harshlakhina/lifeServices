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
import { iconSource } from '../../constants';

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
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
        >
          <View
            style={{
              width: '100%',
              padding: 15,
              bottom: 0,
              position: 'absolute',
              gap: 10,
            }}
          >
            <View style={{ backgroundColor: '#FFF', borderRadius: 25 }}>
              <TouchableOpacity
                style={Styles.modalContainerPhotoPicker}
                onPress={openCamera}
              >
                <MaterialCommunityIcons
                  name="camera"
                  size={28}
                  color="#07C0E0"
                />
                <Text
                  style={{ fontSize: 17, color: '#141414', fontWeight: 600 }}
                >
                  Open Camera
                </Text>
              </TouchableOpacity>

              <Divider />
              <TouchableOpacity
                style={Styles.modalContainerPhotoPicker}
                onPress={openPicker}
              >
                <MaterialCommunityIcons name="file" size={28} color="#07C0E0" />
                <Text
                  style={{ fontSize: 17, color: '#141414', fontWeight: 600 }}
                >
                  Use Last Photo Taken
                </Text>
              </TouchableOpacity>
              <Divider />
              <TouchableOpacity
                style={Styles.modalContainerPhotoPicker}
                onPress={openPicker}
              >
                {/* <Image
                  source={require('../../assets/imageLogo.png')}
                  resizeMode="contain"
                  style={{ height: 28, width: 28, tintColor: '#07C0E0' }}
                /> */}
                <Text
                  style={{ fontSize: 17, color: '#141414', fontWeight: 600 }}
                >
                  Choose From Library
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{ backgroundColor: '#FFF', padding: 15, borderRadius: 15 }}
              onPress={() => setOpenModal(false)}
            >
              <Text
                style={{ textAlign: 'center', fontSize: 20, color: '#07C0E0' }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Header2 title="Add Document" />

      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            padding: 20,
            gap: 20,
            alignItems: 'center',
            backgroundColor: theme.background2,
            flex: 1,
          }}
        >
          <RHFTextInput
            name="email"
            style={{ width: '100%' }}
            placeholder="Name"
          />

          <Select
            title="Document Type"
            options={countries}
            name="documentType"
            style={[Styles.input, Styles.extraInputItem, { width: '100%' }]}
            wrapperStyle={{ alignItems: 'center' }}
            selected={true}
          />

          <RHFTextInput
            name="Description"
            style={{ width: '100%' }}
            placeholder="Description"
            multiline
          />

          {!image ? (
            <View
              style={{
                marginTop: 40,
              }}
            >
              <TouchableOpacity
                onPress={() => setOpenModal(true)}
                style={{
                  backgroundColor: theme.input,
                  height: 120,
                  width: 120,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={iconSource.addPhotoIcon}
                  style={{ height: 55, width: 55, tintColor: theme.bottomTab }}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setOpenModal(true)}
                style={{
                  position: 'absolute',
                  right: -10,
                  top: -13,
                  backgroundColor: '#07C0E0',
                  height: 35,
                  width: 35,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MaterialCommunityIcons
                  name="plus"
                  size={24}
                  color={theme.background}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: '#07C0E0',
                  marginTop: 10,
                  marginBottom: 40,
                  fontSize: 20,
                }}
              >
                Attach photo
              </Text>
            </View>
          ) : (
            <Image
              source={{ uri: image }}
              resizeMode="cover"
              style={{ height: 400, width: 370, borderRadius: 40 }}
            />
          )}

          {image && (
            <View
              style={{
                position: 'absolute',
                alignSelf: 'center',
                bottom: 110,
                backgroundColor: '#07C0E0',
                paddingHorizontal: 40,
                paddingVertical: 16,
                borderRadius: 35,
              }}
            >
              <TouchableOpacity onPress={openPicker}>
                <Text style={{ color: '#FFF' }}>Change Photo</Text>
              </TouchableOpacity>
            </View>
          )}

          <Button title="Submit for review" styleBtn={{ width: '97%' }} />
        </View>
      </KeyboardAwareScrollView>
    </FormProvider>
  );
}

export default AddDocument;

const Styles = StyleSheet.create({
  container: { width: '100%' },
  wrapper: {
    width: '100%',
    position: 'relative',
    gap: 15,
  },
  input: {
    backgroundColor: 'white',
    elevation: 5,
    width: '80%',
    borderRadius: 30,
    height: 60,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  extraInputItem: { position: 'relative', borderWidth: 1 },
  dropdown: {
    position: 'absolute',
    top: 60,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 50,
    zIndex: 1,
  },
  extraDropDownItem: { width: '100%', borderRadius: 0 },
  selectedContainer: {
    flexDirection: 'row',
    width: '80%',
    flexWrap: 'wrap',
    gap: 10,
  },
  selectedText: {
    color: '#FFF',
    paddingLeft: 20,
    fontSize: 20,
  },

  modalContainerPhotoPicker: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    padding: 20,
  },
});
