import IconComponent from "../IconComponent/IconComponent";
import styles from "./ReviewsUser.module.scss";

const ReviewsUser = ({ review }) => {
  return (
    <article className={styles.review}>
      <div className={styles.review__header}>
        <div className={styles.review__user}>
          <div className={styles.review__user_avatar}>
            {review.reviewer_avatar ? (
              <img
                src={review.reviewer_avatar}
                alt={`${review.reviewer_name} Avatar`}
                className={styles.review__user_avatar_img}
              />
            ) : (
              <div className={styles.review__user_initial}>
                {review.reviewer_name[0]}
              </div>
            )}
          </div>
          <div>
            <h3 className={styles.review__user_name}>{review.reviewer_name}</h3>
            <ul className={styles.review__rating}>
              {[...Array(5)].map((_, starIndex) => (
                <li key={starIndex}>
                  <IconComponent
                    id={
                      starIndex < review.reviewer_rating
                        ? "icon-Rating" 
                        : "icon-Rating-1" 
                    }
                    width={16}
                    height={16}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className={styles.review__text}>{review.comment}</p>
    </article>
  );
};

export default ReviewsUser;
