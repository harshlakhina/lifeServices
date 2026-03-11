import { StyleSheet } from 'react-native';

export const ForgotPassWordStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 100,
    alignItems: 'center',
    // marginBottom: 45,
  },
  logo: {
    height: 100,
  },
  logotext: {
    fontWeight: '700',
    color: '#141414',
    fontSize: 35,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 30,
    height: 58,
    paddingHorizontal: 20,
  },
});

export const SignUpStyles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  profileImageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    gap: 10,
  },
  profileLogoImage: {
    height: 80,
    width: 100,
  },
  lifeSevicesText: { color: '#141414', fontSize: 34 },

  inputWrapper: {
    width: '100%',
    gap: 25,
    alignItems: 'center',
    padding: 25,
    position: 'relative',
  },
  inputWidth: {
    width: '100%',
  },
  selectCenter: { alignItems: 'center' },

  signInbtn: {
    backgroundColor: '#02D1AC',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '6%',
  },

  btnText: { color: '#FFFFFF', fontWeight: 700, fontSize: 18 },
  signIn: { color: '#3EAEFF', fontSize: 18 },
  text: {
    fontSize: 37,
  },
  textLife: {
    fontWeight: '700',
  },
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

  selectedImageMainContainer: {
    position: 'relative',
  },
  selectedImageContainer: {
    width: '100%',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  selectedImage: { height: 350, width: '100%', borderRadius: 25 },
  changePhotoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 18,
    backgroundColor: '#07C0E0',
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 35,
  },

  phoneNoMainContainer: { width: '100%', gap: 20 },
  phoneNoContainer: { flexDirection: 'row', gap: 10, paddingLeft: 15 },
  phoneNoText: { color: '#07C0E0', fontSize: 18 },
  doYouHaveAndSignInContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 30,
    width: '100%',
    justifyContent: 'center',
  },
  doYouAlreadyHaveAnAccountText: {
    fontSize: 19,
  },
});

export const SelectDropStyles = StyleSheet.create({
  container: { width: '100%' },
  wrapper: {
    width: '100%',
    position: 'relative',
    gap: 15,
  },
  input: {
    elevation: 3,
    borderBottomWidth: 1,

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
    borderRadius: 20,
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
});

export const RHFTextInputStyles = StyleSheet.create({
  container: { width: '100%', alignItems: 'center', gap: 10 },
  input: {
    backgroundColor: 'white',
    elevation: 5,
    width: '80%',
    borderRadius: 30,
    height: 60,
    paddingHorizontal: 20,

    borderWidth: 1,
  },
  errorBorder: {
    borderColor: 'red',
  },
  bordercolor: { borderColor: '#FFF' },
});
