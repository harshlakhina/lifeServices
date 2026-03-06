import { StyleSheet } from 'react-native';

export const ForgotPassWordStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 140,
    alignItems: 'center',
    marginBottom: 45,
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
    paddingTop: 32,
    paddingBottom: 20,
    position: 'relative',
  },
  input: {
    backgroundColor: 'white',
    elevation: 5,
    width: '80%',
    borderRadius: 30,
    height: 60,
    paddingHorizontal: 20,
    color: 'black',
  },
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
});

export const SelectDropStyles = StyleSheet.create({
  container: { width: '100%' },
  wrapper: {
    width: '100%',
    position: 'relative',
    gap: 15,
  },
  input: {
    elevation:3,
    borderBottomWidth:1,

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
  errorBorder:{
    borderColor:"red"
  },
  bordercolor:{borderColor:"#FFF"}
});
