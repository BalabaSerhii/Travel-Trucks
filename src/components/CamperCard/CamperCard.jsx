import { useEffect, useState } from "react";
import styles from "./CamperCard.module.scss";
import axios from "axios";
import IconComponent from "../IconComponent/IconComponent";

const CamperCard = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
        );
        setCampers(response.data.items);
      } catch (err) {
        setError("Request to get camper list failed");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <p>Wait a little...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className={styles["camper-card"]}>
      <div className={styles["camper-card__content"]}>
        {campers && campers.length > 0 ? (
          campers.map((camper) => (
            <div key={camper.id} className={styles["camper-card__content"]}>
              <h2>{camper.name}</h2>
              <span className={styles["camper-card__price"]}>€{camper.price}</span>
              <div className={styles["camper-card__meta"]}>
                <span>
                  <IconComponent
                    id="Property 1=Default-1"
                    height="16"
                    width="16"
                  />{" "}
                  {camper.rating}({camper.reviews.length}) Reviews
                </span>
                <span>
                  <IconComponent id="map" height="16" width="16" />{" "}
                  {camper.location}
                </span>
              </div>
              <p className={styles["camper-card__description"]}>{camper.description}</p>
              <div className={styles["camper-card__features"]}>
          <span className={styles.feature}><IconComponent id='diagram' height="20"
                    width="20"/>Automatic</span>
          <span className={styles.feature}>Petrol</span>
          <span className={styles.feature}>Kitchen</span>
          <span className={styles.feature}>AC</span>
        </div>
              <img src={camper.gallery[0].thumb} alt={camper.name} />
            </div>
          ))
        ) : (
          <p>There's nothing here</p>
        )}
         <button className={styles["camper-card__button"]}>Show more</button>
      </div>

      {/* <div className={styles["camper-card__image"]}>
        <img src="https://via.placeholder.com/150" alt="Mavericks" />
      </div>
      <div className={styles["camper-card__content"]}>
        <div className={styles["camper-card__header"]}>
          <h3>Mavericks</h3>
          <span className={styles["camper-card__price"]}>€8000.00</span>
        </div>
        <div className={styles["camper-card__meta"]}>
          <span>⭐ 4.4(2 Reviews)</span>
          <span>📍 Kyiv, Ukraine</span>
        </div>
        <p className={styles["camper-card__description"]}>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>
        <div className={styles["camper-card__features"]}>
          <span className={styles.feature}>Automatic</span>
          <span className={styles.feature}>Petrol</span>
          <span className={styles.feature}>Kitchen</span>
          <span className={styles.feature}>AC</span>
        </div>
        <button className={styles["camper-card__button"]}>Show more</button>
      </div> */}
    </div>
  );
};

export default CamperCard;
