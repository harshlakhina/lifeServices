import StarRating from 'react-native-star-rating-widget';

function RatingScreen({ rating, setRating }: any) {
  return (
    <StarRating
      rating={rating}
      starSize={30}
      onChange={setRating}
      color="#07C0E0"
    />
  );
}

export default RatingScreen;
