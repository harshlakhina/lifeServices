import { StyleSheet } from 'react-native';

export const FavouriteStyles = StyleSheet.create({
  headerText: { color: '#FFF', fontWeight: '700', fontSize: 28 },
  bestOfferContainer: { width: '96%', gap: 10, marginTop: 120 },
  bestOfferText: { fontSize: 20, fontWeight: '700', paddingLeft: 19 },
  bestOfferListCard: { paddingLeft: 17, justifyContent: 'center' },
  bestOfferCardImage: {
    width: 320,
    height: 360,
    borderRadius: 30,
    position: 'relative',
    opacity: 0.5,
  },
  bestOfferCardTopContent: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    left: 0,
    top: 4,
    paddingVertical: 18,
    paddingHorizontal: 5,
    paddingLeft: 12,
  },
  bestOfferCardHeartContainer: {
    backgroundColor: '#FFF',
    height: 45,
    width: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bestOfferCardBottomContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 35,
  },
  bestOfferCardBottomNameText: {
    color: '#FFF',
    fontSize: 19,
    fontWeight: '700',
  },
  bestOfferCardBottomRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  bestOfferCardBottomRatingText: { fontSize: 15, color: '#FFF' },
  bestOfferCardBottomDescText: { color: '#FFF' },

  allOfferText: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 19,
    paddingTop: 20,
  },
  allOfferListContainer: { gap: 15 },
  allOfferListCard: {
    width: '100%',
    backgroundColor: '#FFF',
    height: 125,
    borderRadius: 20,
  },
  allOfferListContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 18,
    padding: 15,
    width: '97%',
  },
});
