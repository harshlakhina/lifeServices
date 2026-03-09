import { iconSource, imageSource } from '../../constants';

export const SupportItems = [
  {
    label: 'Report an issue',
    icon: iconSource.backIcon,
    symbol: iconSource.editIcon,
  },
  {
    label: 'Support Center',
    icon: iconSource.backIcon,
    symbol: iconSource.questionMarkCircleOutline,
  },
];

export const InformationItem = [
  {
    label: 'Terms of Use',
    icon: iconSource.backIcon,
    symbol: imageSource.termsOfUse,
    navigate: 'TermOfUse',
  },
  {
    label: 'Community Rules',
    icon: iconSource.backIcon,
    symbol: imageSource.checkMarkSquare,
    navigate: 'CommunityRules',
  },
  {
    label: 'Privacy Policy',
    icon: iconSource.backIcon,
    symbol: imageSource.privacyPolicy,
    navigate: 'PrivacyPolicy',
  },
  {
    label: 'Copyright',
    icon: iconSource.backIcon,
    symbol: imageSource.copyRight,
    navigate: 'CopyRight',
  },
];

export const ExtraItems = [
  {
    label: 'Dark Mode',
    symbol: iconSource.moonIcon,
    icon: iconSource.backIcon,
  },
  {
    label: 'Notification',
    symbol: iconSource.bellIcon,
    icon: iconSource.backIcon,
  },
  {
    label: 'Delete account',
    symbol: iconSource.trashOutline,
    icon: iconSource.backIcon,
  },
];
