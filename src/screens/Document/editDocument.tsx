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
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: theme.background,
        }}
      >
        <View
          style={{
            padding: 20,
            gap: 20,
            alignItems: 'center',
            // backgroundColor: theme.background,
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: '#38C976',
              width: '100%',
              borderRadius: 30,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 13,
              }}
            >
              <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                <Text style={{ color: '#FFF', fontSize: 17 }}>Status :</Text>
                <Text style={{ color: '#FFF', fontSize: 17 }}>Confirmed</Text>
              </View>

              <Image
                source={imageSource.checkFill}
                style={{ height: 35, width: 35 }}
                resizeMode="contain"
              />
            </View>
          </View>

          <RHFTextInput
            placeholder="+7 (899) 355 76"
            name="PhoneNo"
            style={{ width: '100%' }}
            keyboardType="phone-pad"
          />
          <RHFTextInput
            placeholder="Hello, I need an invitation design for the wedding."
            name="description"
            style={{ width: '100%' }}
            multiline
          />

          <View style={{ height: 130 }}>
            <FlatList
              data={photoUrls}
              showsHorizontalScrollIndicator={false}
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
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ViewAllPhoto' as never)}
          >
            <Text style={{ fontSize: 20, color: '#07C0E0' }}>
              {string.editAnApplication.viewPhoto}
            </Text>
          </TouchableOpacity>

          <Button
            title={string.button.confirmAnApplication}
            styleBtn={{ width: '97%', marginTop: 70 }}
            handleBtn={() => navigation.navigate('ViewDocument' as never)}
          />
        </View>
      </KeyboardAwareScrollView>
    </FormProvider>
  );
}

export default EditDocument;

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
