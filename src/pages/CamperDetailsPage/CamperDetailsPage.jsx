import { useEffect, useState } from "react";
import { NavLink, useParams, Routes, Route, Navigate } from "react-router-dom";
import styles from "./CamperDetailsPage.module.scss";
import IconComponent from "../../components/IconComponent/IconComponent";
import { fetchCamperById } from "../../api/campersAPI";
import FormComponent from "../../components/FormComponent/FormComponent";
import DetailsCamper from "../../components/DetailsCamper/DetailsCamper";
import CamperReviewsDetails from "../../components/CamperReviewsDetails/CamperReviewsDetails";
import clsx from "clsx";

const activeLink = ({ isActive }) => {
  return clsx(styles["camper-card__item-link"], isActive && styles.active);
};

function CamperDetailsPage() {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCamperById(id);
        setCamper(response.data);
      } catch (err) {
        setError("Failed to fetch camper details");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading camper details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles["camper-card"]}>
      <h2>{camper.name}</h2>
      <span className={styles["camper-card__price"]}>€{camper.price}</span>
      <div className={styles["camper-card__meta"]}>
        <span>
          <IconComponent id="Property 1=Default-1" height="16" width="16" /> 
          {camper.rating}({camper.reviews.length}) Reviews
        </span>
        <span>
          <IconComponent id="map" height="16" width="16" /> {camper.location}
        </span>
      </div>
      <div className={styles["camper-card__image"]}>
        {camper.gallery.map((image, index) => (
          <img
            key={index}
            src={image.thumb}
            alt={`${camper.name} image ${index + 1}`}
            className={styles["camper-card__img"]}
          />
        ))}
      </div>
      <p className={styles["camper-card__description"]}>{camper.description}</p>

      {/* Список с Features и Reviews */}
      <ul className={styles["camper-card__list"]}>
        <li className={styles["camper-card__item"]}>
          <NavLink className={activeLink} to="features">
            Features
          </NavLink>
        </li>
        <li className={styles["camper-card__item"]}>
          <NavLink className={activeLink} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>

      {/* Контейнер для деталей и формы */}
      <div className={styles.formDetailContainer}>
        <Routes>
          <Route path="" element={<Navigate to="features" />} />
          <Route path="features" element={<DetailsCamper />} />
          <Route path="reviews" element={<CamperReviewsDetails reviews={camper.reviews} />} />
        </Routes>

        {/* Блок с формой */}
        <div className={styles["form-section"]}>
          <FormComponent />
        </div>
      </div>
    </div>
  );
}

export default CamperDetailsPage;
