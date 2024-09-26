import React, { useState } from "react";
import styles from "./FilterForm.module.scss";

const FilterForm = () => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);

  const equipmentOptions = [
    { id: "ac", label: "AC", icon: "ac-icon" },
    { id: "automatic", label: "Automatic", icon: "automatic-icon" },
    { id: "kitchen", label: "Kitchen", icon: "kitchen-icon" },
    { id: "tv", label: "TV", icon: "tv-icon" },
    { id: "bathroom", label: "Bathroom", icon: "bathroom-icon" },
  ];

  const vehicleTypes = [
    { id: "van", label: "Van", icon: "van-icon" },
    { id: "integrated", label: "Fully Integrated", icon: "integrated-icon" },
    { id: "alcove", label: "Alcove", icon: "alcove-icon" },
  ];

  const handleEquipmentClick = (id) => {
    setSelectedEquipment((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleVehicleTypeClick = (id) => {
    setSelectedVehicleType(id);
  };

  return (
    <form className={styles.form}>
      {/* Location */}
      <div className={styles.location}>
        <label htmlFor="location">Location</label>
        <div className={styles.input}>
          <span className={styles.icon}>
            <img src="map-icon.svg" alt="map icon" />
          </span>
          <input id="location" type="text" value="Kyiv, Ukraine" readOnly />
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        <h3>Filters</h3>

        {/* Vehicle equipment */}
        <div className={styles.section}>
          <h4>Vehicle equipment</h4>
          <div className={styles.grid}>
            {equipmentOptions.map((option) => (
              <button
                type="button"
                key={option.id}
                onClick={() => handleEquipmentClick(option.id)}
                className={`${styles.option} ${
                  selectedEquipment.includes(option.id) ? styles.selected : ""
                }`}
              >
                <img src={`${option.icon}.svg`} alt={option.label} />
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle type */}
        <div className={styles.section}>
          <h4>Vehicle type</h4>
          <div className={styles.grid}>
            {vehicleTypes.map((type) => (
              <button
                type="button"
                key={type.id}
                onClick={() => handleVehicleTypeClick(type.id)}
                className={`${styles.option} ${
                  selectedVehicleType === type.id ? styles.selected : ""
                }`}
              >
                <img src={`${type.icon}.svg`} alt={type.label} />
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search button */}
        <div className={styles.searchButton}>
          <button type="submit">Search</button>
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
