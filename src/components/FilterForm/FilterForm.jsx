import React, { useState } from "react";
import styles from "./FilterForm.module.scss";
import IconComponent from "../IconComponent/IconComponent"; 

const FilterForm = () => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);

  const equipmentOptions = [
    { id: "ac", label: "AC", icon: "bi_droplet" }, 
    { id: "automatic", label: "Automatic", icon: "diagram" },
    { id: "kitchen", label: "Kitchen", icon: "tv" },
    { id: "tv", label: "TV", icon: "cup-hot" },
    { id: "bathroom", label: "Bathroom", icon: "map" },
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
      
      <div className={styles.location}>
        <label htmlFor="location">Location</label>
        <div className={styles.input}>
          <span className={styles.icon}>
            <IconComponent id="map" width="16" height="16" />{" "}
            
          </span>
          <input id="location" type="text" value="Kyiv, Ukraine" readOnly />
        </div>
      </div>

      <div className={styles.filters}>
        <h3>Filters</h3>

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
                <IconComponent id={option.icon} width="16" height="16" />{" "}
                {option.label}
              </button>
            ))}
          </div>
        </div>

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
                <IconComponent id={type.icon} width="16" height="16" />{" "}
                {/* Иконка */}
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.searchButton}>
          <button type="submit">Search</button>
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
