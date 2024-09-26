import { useEffect, useState } from "react";
import styles from "./CamperCard.module.scss";
import IconComponent from "../IconComponent/IconComponent";
import { fetchAllCampers } from "../../api/campersAPI";
import { useNavigate } from "react-router-dom";

const CamperCard = () => {
  const [campers, setCampers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllCampers();
        setCampers(response.data.items);
      } catch (err) {
        setError("Request to get camper list failed");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const loadMoreCampers = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const showCamperDetails = (id) => {
    navigate(`/catalog/${id}`);
  };

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
          campers.slice(0, visibleCount).map((camper) => (
            <div key={camper.id} className={styles["camper-card__content"]}>
              <h2>{camper.name}</h2>
              <span className={styles["camper-card__price"]}>
                €{camper.price}
              </span>
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
              <p className={styles["camper-card__description"]}>
                {camper.description}
              </p>
              <div className={styles["camper-card__features"]}>
                <span className={styles.feature}>
                  <IconComponent id="diagram" height="20" width="20" />
                  Automatic
                </span>
                <span className={styles.feature}>Petrol</span>
                <span className={styles.feature}>Kitchen</span>
                <span className={styles.feature}>AC</span>
                <button
                  className={styles["camper-card__button"]}
                  onClick={() => showCamperDetails(camper.id)}
                >
                  Show more
                </button>
              </div>
              <div className={styles["camper-card__image"]}>
                <img src={camper.gallery[0].thumb} alt={camper.name} />
              </div>
            </div>
          ))
        ) : (
          <p>There's nothing here</p>
        )}
      </div>
      <div className={styles.button}>
        <button onClick={loadMoreCampers}>Load more</button>
      </div>
    </div>
  );
};

export default CamperCard;
