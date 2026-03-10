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
        contentContainerStyle={{ flexGrow: 1 ,     backgroundColor: theme.background,}}
      >
        <View
          style={{
            padding: 20,
            gap: 20,
            alignItems: 'center',
          }}
        >
          <Select
            title={string.createNewDocument.createAnApplication}
            options={professions}
            name="profession"
            style={[{ width: '100%' }]}
            wrapperStyle={{ alignItems: 'center' }}
            selected={true}
          />

          <RHFTextInput
            placeholder={string.createNewDocument.phoneNoPlaceholder}
            name="PhoneNo"
            style={{ width: '100%' }}
            keyboardType="phone-pad"
          />
          <RHFTextInput
            placeholder={string.createNewDocument.description}
            name="description"
            style={{ width: '100%' }}
            multiline
          />

          {image.length > 0 && (
            <FlatList
              data={image}
              horizontal={true}
              contentContainerStyle={{ gap: 10 }}
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
                            style={{
                              height: 50,
                              width: 50,
                              tintColor: theme.text,
                            }}
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
              onPress={() => navigation.navigate('ViewAllPhoto' as never)}
            >
              <Text style={{ fontSize: 20, color: '#07C0E0' }}>{string.createNewDocument.viewPhoto}</Text>
            </TouchableOpacity>
          )}

          <View
            style={{
              marginTop: 40,
            }}
          >
            <TouchableOpacity
              onPress={() => openPicker()}
              style={{
                backgroundColor: theme.card,
                height: 120,
                width: 120,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 3,
              }}
            >
              <Image
                source={iconSource.addPhotoIcon}
                style={{ height: 65, width: 65, tintColor: theme.bottomTab }}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => openPicker()}
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
             {string.createNewDocument.attachPhoto}
            </Text>
          </View>

          <Button
            title={string.button.submitAnApplication}
            styleBtn={{ width: '97%' }}
            handleBtn={() => navigation.navigate('ViewDocument' as never)}
          />
        </View>
      </KeyboardAwareScrollView>
    </FormProvider>
  );
}

export default CreateNewDocument;

const Styles = StyleSheet.create({
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
});
