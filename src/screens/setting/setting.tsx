import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ExtraItems, InformationItem, SupportItems } from './mock-data';
import { FormProvider, useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import Header2 from '../../components/header2';
import { ThemeContext } from '../../theme/themecontext';
import RHFSwitch from '../../hookform/rhfSwitch';
import { iconSource, imageSource, string } from '../../constants';

function Setting() {
  const { theme, isDark, toggleTheme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const methods = useForm();

  const [isEndSession, setIsEndSession] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  function handleDeletBtn(name: string) {
    if (name === 'Delete account') setIsDelete(true);
  }

  function handleRadioBtn(name: string) {
    if (name === 'Dark Mode') toggleTheme();
  }
  return (
    <FormProvider {...methods}>
      <Header2 title={string.setting.settings} />
      <Modal transparent={true} visible={isEndSession}>
        <View
          style={[Styles.modalContainer, { backgroundColor: theme.modalBg }]}
        >
          <View
            style={[
              Styles.modalSmallContainer,
              { backgroundColor: theme.background },
            ]}
          >
            <Image
              source={imageSource.logout}
              resizeMode="contain"
              style={Styles.modalImage}
            />
            <Text style={[Styles.modalTitle, { color: theme.text }]}>
              {string.setting.areYouSureYouWantToExit}
            </Text>

            <Text style={Styles.modalDescription}>
              {string.setting.youWillHaveToLogInAgain}
            </Text>

            <View style={Styles.modalBtnContainer}>
              <TouchableOpacity
                onPress={() => setIsEndSession(false)}
                style={Styles.modalBtn}
              >
                <Text style={Styles.modalBtnExitAndDeleteText}>
                  {string.button.exit}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setIsEndSession(false)}
                style={[Styles.modalBtn, { backgroundColor: theme.input }]}
              >
                <Text style={[Styles.modalCancelText, { color: theme.text }]}>
                  {string.button.cancel}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} visible={isDelete}>
        <View
          style={[Styles.modalContainer, { backgroundColor: theme.modalBg }]}
        >
          <View
            style={[
              Styles.modalSmallContainer,
              { backgroundColor: theme.background },
            ]}
          >
            <Image
              source={imageSource.delete}
              resizeMode="contain"
              style={Styles.modalImage}
            />
            <Text style={[Styles.modalTitle, { color: theme.text }]}>
              {string.setting.areYouSureYouWantoDelete}
            </Text>

            <Text style={Styles.modalDescription}>
              {string.setting.thisActionIsIrreversible}
            </Text>

            <View style={Styles.modalBtnContainer}>
              <TouchableOpacity
                onPress={() => setIsDelete(false)}
                style={Styles.modalBtn}
              >
                <Text style={Styles.modalBtnExitAndDeleteText}>
                  {string.button.delete}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setIsDelete(false)}
                style={[Styles.modalBtn, { backgroundColor: theme.input }]}
              >
                <Text style={[Styles.modalCancelText, { color: theme.text }]}>
                  {string.button.cancel}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView
        contentContainerStyle={[
          Styles.bodyScrollContainer,
          { backgroundColor: theme.background2 },
        ]}
      >
        {/* ExtraItems */}
        <View style={Styles.bodyItemContainer}>
          {ExtraItems.map(item => (
            <TouchableOpacity
              key={item.label}
              style={[Styles.menuItem, { backgroundColor: theme.input }]}
              onPress={() => handleDeletBtn(item.label)}
            >
              <View style={Styles.menuItemLeftContainer}>
                <Image
                  source={item.symbol}
                  resizeMode="contain"
                  style={Styles.menuItemLeftImage}
                />
                <Text style={[Styles.menuItemLeftText, { color: theme.text }]}>
                  {item.label === 'Dark Mode'
                    ? isDark
                      ? 'Light Mode'
                      : 'Dark Mode'
                    : item.label}
                </Text>
              </View>

              <View>
                {item.label === 'Dark Mode' || item.label === 'Notification' ? (
                  <RHFSwitch
                    name={item.label}
                    handleRadioBtn={handleRadioBtn}
                  />
                ) : (
                  <Image
                    source={item.icon}
                    resizeMode="contain"
                    style={Styles.menuItemRightIcon}
                  />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* SupportItems */}
        <View style={Styles.bodyItemContainer}>
          <Text style={[Styles.MainText, { color: theme.text }]}>Support</Text>
          {SupportItems.map(item => (
            <TouchableOpacity
              key={item.label}
              style={[Styles.menuItem, { backgroundColor: theme.input }]}
            >
              <View style={Styles.menuItemLeftContainer}>
                <Image
                  source={item.symbol}
                  resizeMode="contain"
                  style={Styles.menuItemLeftImage}
                />
                <Text style={[Styles.menuItemLeftText, { color: theme.text }]}>
                  {item.label}
                </Text>
              </View>

              <View>
                <Image
                  source={item.icon}
                  resizeMode="contain"
                  style={Styles.menuItemRightIcon}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* InformationItem */}
        <View style={Styles.bodyItemContainer}>
          <Text style={[Styles.MainText, { color: theme.text }]}>
            Information
          </Text>
          {InformationItem.map(item => (
            <TouchableOpacity
              key={item.label}
              style={[Styles.menuItem, { backgroundColor: theme.input }]}
              onPress={() => navigation.navigate(item.navigate as never)}
            >
              <View style={Styles.menuItemLeftContainer}>
                <Image
                  source={item.symbol}
                  resizeMode="contain"
                  style={Styles.menuItemLeftImage}
                />
                <Text style={[Styles.menuItemLeftText, { color: theme.text }]}>
                  {item.label}
                </Text>
              </View>

              <View>
                <Image
                  source={item.icon}
                  resizeMode="contain"
                  style={Styles.menuItemRightIcon}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* End session */}
        <View
          style={[
            Styles.EndSessionBtnContainer,
            { backgroundColor: theme.endSessionBg },
          ]}
        >
          <TouchableOpacity
            style={Styles.EndSessionBtn}
            onPress={() => setIsEndSession(true)}
          >
            <Image
              source={iconSource.logOutOutline}
              resizeMode="cover"
              style={Styles.EndSessionBtnImage}
            />
            <Text style={Styles.EndSessionBtnText}>
              {string.button.endSession}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </FormProvider>
  );
}

export default Setting;

const Styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  modalSmallContainer: {
    height: 420,
    margin: 25,
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    gap: 22,
  },
  modalImage: { height: 100, width: 100, marginVertical: 20 },
  modalTitle: { fontSize: 26, fontWeight: 700, textAlign: 'center' },
  modalDescription: { color: '#66737F', fontSize: 18 },

  modalBtnContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 12,
  },
  modalBtn: {
    flex: 1,
    backgroundColor: '#02D1AC',
    paddingVertical: 18,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // modalCancelBtn: {
  //   backgroundColor: '#e8e9ee',
  // },
  modalBtnExitAndDeleteText: {
    color: '#FFFFFF',
    fontSize: 17,
  },
  modalCancelText: {
    color: '#141414',
    fontSize: 17,
  },
  bodyScrollContainer: { gap: 20, paddingVertical: 20 },
  MainText: { fontSize: 25, fontWeight: 700 },
  bodyItemContainer: { gap: 20, marginHorizontal: 25 },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
    elevation: 5,
    borderRadius: 50,
  },
  menuItemLeftContainer: { flexDirection: 'row', gap: 10 },
  menuItemLeftImage: { height: 23, width: 23, tintColor: '#07C0E0' },
  menuItemLeftText: { fontSize: 16, color: '#141414', fontWeight: 500 },
  menuItemRightIcon: {
    height: 20,
    width: 20,
    transform: [{ rotate: '180deg' }],
    tintColor: '#8F9CA9',
  },
  EndSessionBtnContainer: {
    padding: 16,
    marginHorizontal: 40,
    marginTop: 30,
    borderRadius: 50,
  },
  EndSessionBtn: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  EndSessionBtnImage: { height: 19, width: 24, tintColor: '#FE5050' },
  EndSessionBtnText: { fontSize: 20, color: '#FE5050' },
});
