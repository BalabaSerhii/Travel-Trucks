import styles from './CamperCardComponent.module.scss'; 

const CamperCard = () => {
  return (
    <div className={styles['camper-card']}>
      <div className={styles['camper-card__image']}>
        <img src="https://via.placeholder.com/150" alt="Mavericks" />
      </div>
      <div className={styles['camper-card__content']}>
        <div className={styles['camper-card__header']}>
          <h3>Mavericks</h3>
          <span className={styles['camper-card__price']}>€8000.00</span>
        </div>
        <div className={styles['camper-card__meta']}>
          <span>⭐ 4.4(2 Reviews)</span>
          <span>📍 Kyiv, Ukraine</span>
        </div>
        <p className={styles['camper-card__description']}>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>
        <div className={styles['camper-card__features']}>
          <span className={styles.feature}>Automatic</span>
          <span className={styles.feature}>Petrol</span>
          <span className={styles.feature}>Kitchen</span>
          <span className={styles.feature}>AC</span>
        </div>
        <button className={styles['camper-card__button']}>Show more</button>
      </div>
    </div>
  );
};

export default CamperCard;
