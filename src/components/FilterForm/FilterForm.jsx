import { useState } from "react";
import styles from "./FilterForm.module.scss";
import IconComponent from "../IconComponent/IconComponent";

// eslint-disable-next-line react/prop-types
const FilterForm = ({ onFilterChange }) => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);

  const features = [
    {
      key: "AC",
      label: "AC",
      svg: "ac",
    },
    {
      key: "transmission",
      label: "Automatic",
      svg: "diagram",
      value: "automatic",
    },
    {
      key: "kitchen",
      label: "Kitchen",
      svg: "cup-hot",
    },
    {
      key: "TV",
      label: "TV",
      svg: "tv",
    },
    {
      key: "bathroom",
      label: "Bathroom",
      svg: "water",
    },
  ];

  const vehicleTypes = [
    { id: "alcove", label: "Alcove", icon: "alcove" },
    { id: "panelTruck", label: "Van", icon: "van" },
    { id: "fullyIntegrated", label: "Fully Integrated", icon: "full" },
  ];

  const handleEquipmentClick = (id) => {
    const updatedEquipment = selectedEquipment.includes(id)
      ? selectedEquipment.filter((item) => item !== id)
      : [...selectedEquipment, id];

    setSelectedEquipment(updatedEquipment);
    onFilterChange({
      selectedEquipment: updatedEquipment,
      selectedVehicleType,
    });
  };

  const handleVehicleTypeClick = (id) => {
    const updatedVehicleType = selectedVehicleType === id ? null : id;
    setSelectedVehicleType(updatedVehicleType);
    onFilterChange({
      selectedEquipment,
      selectedVehicleType: updatedVehicleType,
    });
  };

  return (
    <form className={styles.form}>
      <div className={styles.filters}>
        <h3>Filters</h3>

        <div className={styles.section}>
          <h4>Vehicle equipment</h4>
          <div className={styles.grid}>
            {features.map((feature) => (
              <button
                type="button"
                key={feature.key}
                onClick={() => handleEquipmentClick(feature.key)}
                className={`${styles.option} ${
                  selectedEquipment.includes(feature.key) ? styles.selected : ""
                }`}
              >
                <IconComponent id={feature.svg} width="32" height="32" />
                {feature.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles["section__h4"]}>Vehicle type</h4>
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
                <IconComponent id={type.icon} width="32" height="32" />
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
