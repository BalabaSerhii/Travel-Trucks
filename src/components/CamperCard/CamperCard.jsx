import { useEffect, useState } from "react";
import styles from "./CamperCard.module.scss";
import IconComponent from "../IconComponent/IconComponent";
import { fetchAllCampers } from "../../api/campersAPI";
import { useNavigate } from "react-router-dom";
import Features from "../Features/Features";

const CamperCard = ({ filters }) => {
  const [campers, setCampers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likedCampers, setLikedCampers] = useState({});
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

  const handleLikeClick = (id) => {
    setLikedCampers((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };

  const filterCampers = (campers) => {
    const { selectedEquipment, selectedVehicleType } = filters;

    if (selectedEquipment.length === 0 && !selectedVehicleType) {
      return campers;
    }

    return campers.filter((camper) => {
      const matchesVehicleType = selectedVehicleType
        ? camper.form === selectedVehicleType
        : true;

      const matchesEquipment = selectedEquipment.every(
        (equipment) => camper[equipment]
      );

      return matchesVehicleType && matchesEquipment;
    });
  };

  if (loading) {
    return <p>Wait a little...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  const filteredCampers = filterCampers(campers);

  const campersToDisplay =
    filters.selectedEquipment.length > 0 || filters.selectedVehicleType
      ? filteredCampers
      : filteredCampers.slice(0, visibleCount);

  return (
    <section className={styles["camper-card"]}>
      {campersToDisplay && campersToDisplay.length > 0 ? (
        campersToDisplay.map((camper) => (
          <article key={camper.id} className={styles["camper-card__content"]}>
            <figure className={styles["camper-card__image"]}>
              <img src={camper.gallery[0].thumb} alt={camper.name} />
            </figure>
            <div className={styles["camper-card__info"]}>
              <header className={styles["camper-card__header"]}>
                <h2>{camper.name}</h2>
                <span className={styles["camper-card__header__price"]}>
                  €{camper.price}
                  <button
                    className={styles["camper-card__header__btn"]}
                    onClick={() => handleLikeClick(camper.id)}
                  >
                    <IconComponent
                      id="heard"
                      height="26"
                      width="24"
                      fillColor={likedCampers[camper.id] ? "red" : "black"}
                    />
                  </button>
                </span>
              </header>
              <section className={styles["camper-card__meta"]}>
                <span>
                  <IconComponent id="icon-Rating" height="16" width="16" />{" "}
                  {camper.rating} ({camper.reviews.length}) Reviews
                </span>
                <span>
                  <IconComponent id="Map" height="16" width="16" />{" "}
                  {camper.location}
                </span>
              </section>
              <p className={styles["camper-card__description"]}>
                {camper.description}
              </p>
              <section>
                <Features camper={camper} />
              </section>
              <footer>
                <button
                  className={styles["camper-card__button"]}
                  onClick={() => showCamperDetails(camper.id)}
                >
                  Show more
                </button>
              </footer>
            </div>
          </article>
        ))
      ) : (
        <p>There's nothing here</p>
      )}
      {filters.selectedEquipment.length === 0 &&
        !filters.selectedVehicleType && (
          <div className={styles.button}>
            <button onClick={loadMoreCampers}>Load more</button>
          </div>
        )}
    </section>
  );
};

export default CamperCard;
