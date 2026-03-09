import {
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Text,
  Modal,
  StyleSheet,
} from 'react-native';
// import { InboxStyles } from './styles';
import { CreatedMockData } from './created-mock-data';
import { useContext, useState } from 'react';
import { Button } from '../../components/button';
import { RHFTextInput } from '../../hookform/rhfTextInput';
import { FormProvider, useForm } from 'react-hook-form';
import RatingScreen from '../../components/ratingScreen';
import { ThemeContext } from '../../theme/themecontext';
import { imageSource } from '../../constants';

export const Created = () => {
  const [dialog, setDialog] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const methods = useForm();
  const { theme } = useContext(ThemeContext);

  function handleActiveCard(id: number) {
    setActiveIdx(id);
  }

  return (
    <FormProvider {...methods}>
      <Modal transparent={true} visible={dialog}>
        <View
          style={[Styles.modalContainer, { backgroundColor: theme.modalBg }]}
        >
          <View
            style={[Styles.modalCard, { backgroundColor: theme.background }]}
          >
            <Text style={[Styles.modalLeaveReviewText, { color: theme.text }]}>
              Leave a review
            </Text>

            <RHFTextInput
              placeholder="Your Review"
              name="review"
              style={[Styles.modalInput]}
              multiline
            />

            <View style={Styles.RatingContainer}>
              <Text style={[Styles.modalYourMarkText, { color: theme.text }]}>Your Mark</Text>
              <RatingScreen rating={rating} setRating={setRating} />
            </View>

            <View style={Styles.modalBtnContainer}>
              <TouchableOpacity
                onPress={() => {
                  setDialog(false);
                  setActiveIdx(null);
                }}
                style={[Styles.modalBtn, Styles.modalSendBtnBg]}
              >
                <Text style={Styles.modalSendBtnText}>Send</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setDialog(false);
                  setActiveIdx(null);
                }}
                style={[Styles.modalBtn, { backgroundColor: theme.card}]}
              >
                <Text style={[Styles.modalCancelText,{color:theme.text}]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <FlatList
        data={CreatedMockData}
        horizontal={false}
        contentContainerStyle={[
          Styles.allOfferListContainer,
          { backgroundColor: theme.background2 },
        ]}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <>
              <View
                style={[
                  Styles.allOfferListCard,
                  Styles.MainContainerExtraItem,
                  { backgroundColor: theme.card },
                ]}
              >
                <View style={Styles.allOfferListContent}>
                  <View>
                    <Image
                      source={{ uri: item.photoUrl }}
                      style={Styles.ListContentImage}
                      resizeMode="cover"
                    />
                    <View style={Styles.checkImageContainer}>
                      <Image
                        source={imageSource.checkFill}
                        style={Styles.checkImage}
                        resizeMode="contain"
                      />
                    </View>
                  </View>

                  <View style={Styles.infoContainer}>
                    <Text style={[Styles.nameText, { color: theme.text }]}>
                      {item.name}
                    </Text>

                    <Text style={Styles.addressText}>st. Tverskaya, 13</Text>

                    <View style={Styles.searchRow}>
                      <Text style={Styles.searchLabel}>Search:</Text>
                      <Text style={Styles.searchValue}>Lawyer</Text>
                    </View>
                  </View>

                  <View>
                    {item.status === 'pending' && (
                      <View style={Styles.pendingImageContainer}>
                        <Image
                          source={imageSource.pending}
                          resizeMode="contain"
                          style={Styles.pedningAndFullFillContent}
                        />
                      </View>
                    )}

                    {item.status === 'fulfilled' && (
                      <TouchableOpacity
                        onPress={() => handleActiveCard(item.id)}
                      >
                        <View style={Styles.fullFillImageContainer}>
                          <Image
                            source={imageSource.check}
                            resizeMode="contain"
                            style={Styles.pedningAndFullFillContent}
                          />
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>

                <Text numberOfLines={2} style={{ color: theme.secondaryText }}>
                  {item.description}
                </Text>

                {item.status === 'pending' && (
                  <View style={Styles.RejectContainer}>
                    <TouchableOpacity
                      style={[
                        Styles.RejectBtnContainer,
                        { backgroundColor: theme.input },
                      ]}
                    >
                      <Text style={[Styles.RejectText, { color: theme.text }]}>
                        Reject application
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}

                {activeIdx === item.id && (
                  <View style={Styles.CardSecondLayerContainer}>
                    <View style={Styles.SecondLayerCard}>
                      <Text
                        style={[
                          Styles.SecondLayerApplicationText,
                          { color: theme.text },
                        ]}
                      >
                        Application completed
                      </Text>
                      <Button
                        title="Leave a review"
                        styleBtn={Styles.SecondCardLeaveAReviewBtn}
                        handleBtn={() => setDialog(true)}
                      />
                    </View>
                  </View>
                )}
              </View>
            </>
          );
        }}
      />
    </FormProvider>
  );
};

const Styles = StyleSheet.create({
  modalContainer: {
    flex: 1,

    justifyContent: 'center',
  },
  modalCard: {
    backgroundColor: '#F5F6F9',
    margin: 25,
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    gap: 25,
  },
  modalLeaveReviewText: { fontSize: 30, fontWeight: 700 },
  modalInput: {
    height: 100,
    width: '100%',
    borderRadius: 20,
    justifyContent: 'flex-start',
  },
  infoContainer: {
    width: '55%',
    gap: 10,
  },

  nameText: {
    fontSize: 19,
    fontWeight: '700',
  },

  addressText: {
    color: '#66737F',
    fontSize: 13,
  },

  searchRow: {
    flexDirection: 'row',
  },

  searchLabel: {
    fontSize: 20,
    color: '#66737F',
  },

  searchValue: {
    fontSize: 20,
    color: '#07C0E0',
  },
  modalYourMarkText: { fontSize: 20, fontWeight: 700 },
  modalBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  modalBtn: {
    flex: 1,
    paddingVertical: 18,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalSendBtnBg: { backgroundColor: '#02D1AC' },
  modalSendBtnText: { color: '#FFF', fontSize: 17 },
  modalCancelBtnBg: { backgroundColor: '#e8e9ee' },
  modalCancelText: {
    color: '#141414',
    fontSize: 17,
  },
  RatingContainer: {
    alignItems: 'center',
    gap: 15,
  },
  allOfferContainer: { width: '100%', paddingHorizontal: 20 },
  allOfferText: {
    fontSize: 20,
    fontWeight: '700',
  },
  allOfferListContainer: { gap: 10, padding: 20 },
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
  MainContainerExtraItem: { position: 'relative' },
  ListContentImage: {
    width: 95,
    height: 96,
    borderRadius: 15,
    position: 'relative',
  },
  checkImageContainer: { position: 'absolute', right: -43, top: -8 },
  checkImage: { height: 30 },

  contentContainer: { width: '54%', gap: 6 },
  contentNameText: {
    color: '#141414',
    fontSize: 19,
    fontWeight: '700',
  },

  contentRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },

  contentRatingText: { fontSize: 15, color: '#07C0E0' },
  pendingImageContainer: {
    backgroundColor: '#FFA23A',
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pedningAndFullFillContent: { height: 18, width: 18 },
  fullFillImageContainer: {
    backgroundColor: '#38C976',
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    flex: 1,
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
  },
  RejectContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 5,
  },
  RejectBtnContainer: {
    borderRadius: 40,
    width: 250,
    paddingVertical: 17,
    alignItems: 'center',
  },
  RejectText: { fontSize: 20 },

  CardSecondLayerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  SecondLayerCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  SecondLayerApplicationText: { fontWeight: 900, fontSize: 30 },
  SecondCardLeaveAReviewBtn: { width: '60%' },
});
