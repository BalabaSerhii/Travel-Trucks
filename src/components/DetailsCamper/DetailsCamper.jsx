import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../store/campersSlice";
import styles from "../DetailsCamper/DetailsCamper.module.scss";

const DetailsCamper = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedCamper = useSelector((state) => state.campers.selectedCamper);
  const status = useSelector((state) => state.campers.status);
  const error = useSelector((state) => state.campers.error);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, id]);

  if (!selectedCamper) {
    return <p>No camper selected</p>;
  }

  if (status === "loading") {
    return <p>Loading...: </p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.detailsContainer}>
      <h3>Vehicle details</h3>
      <ul className={styles["details-list"]}>
        <li>
          <span className={styles["label"]}>Form:</span>
          <span className={styles["value"]}>{selectedCamper.form}</span>
        </li>
        <li>
          <span className={styles["label"]}>Length:</span>
          <span className={styles["value"]}>{selectedCamper.length}</span>
        </li>
        <li>
          <span className={styles["label"]}>Width:</span>
          <span className={styles["value"]}>{selectedCamper.width}</span>
        </li>
        <li>
          <span className={styles["label"]}>Height:</span>
          <span className={styles["value"]}>{selectedCamper.height}</span>
        </li>
        <li>
          <span className={styles["label"]}>Tank:</span>
          <span className={styles["value"]}>{selectedCamper.tank}</span>
        </li>
        <li>
          <span className={styles["label"]}>Consumption:</span>
          <span className={styles["value"]}>{selectedCamper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default DetailsCamper;
