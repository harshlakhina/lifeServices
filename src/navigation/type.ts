import { Routes } from './constants';

export type AuthStackParamList = {
  [Routes.Splash]: undefined;
  [Routes.OnBoarding]: undefined;
  [Routes.SignIn]: undefined;
  [Routes.SignUp]: undefined;
  [Routes.ForgotPassword]: undefined;
};

export type MainStackParamList = {
  [Routes.MainSection]: undefined;
  [Routes.Home]: undefined;
  [Routes.Map]: undefined;
  [Routes.Profile]: undefined;
  [Routes.ProfileSetting]: undefined;
  [Routes.AddNewDocumentProfile]: undefined;
  [Routes.ViewAll]: undefined;
  [Routes.EditDocument]: undefined;
  [Routes.AddNewDocument]: undefined;
  [Routes.ViewAllPhotos]: undefined;
  [Routes.Inbox]: undefined;
  [Routes.Favourite]: undefined;
  [Routes.Notification]: undefined;
  [Routes.ContactDevelopers]: undefined;

  [Routes.Setting]: undefined;
  [Routes.TermOfUse]: undefined;
  [Routes.CommunityRules]: undefined;
  [Routes.PrivacyPolicy]: undefined;
  [Routes.CopyRight]: undefined;
};
