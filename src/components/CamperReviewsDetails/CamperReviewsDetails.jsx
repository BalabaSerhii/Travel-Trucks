import ReviewsUser from "../ReviewsUser/ReviewsUser";

const CamperReviewsDetails = ({ reviews }) => {
  return (
    <div>
      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <ReviewsUser key={index} review={review} />
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default CamperReviewsDetails;
