import { StyleSheet } from 'react-native';

export const InboxStyles = StyleSheet.create({
  allOfferContainer: { width: '100%', marginBottom: 20, paddingHorizontal: 20 },
  allOfferText: {
    fontSize: 20,
    fontWeight: '700',
  },
  allOfferListContainer: { gap: 10,padding:20 },
  allOfferListCard: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    gap: 20,
  },
  allOfferListContent: {
    flexDirection: 'row',
    gap: 18,
    width: '100%',
  },
});
