import { useState } from "react";
import styles from "./FilterForm.module.scss";
import IconComponent from "../IconComponent/IconComponent";

const FilterForm = ({ onFilterChange }) => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);

  const equipmentOptions = [
    { id: "AC", label: "AC", icon: "bi_droplet" },
    { id: "automatic", label: "Automatic", icon: "diagram" },
    { id: "kitchen", label: "Kitchen", icon: "tv" },
    { id: "TV", label: "TV", icon: "cup-hot" },
    { id: "bathroom", label: "Bathroom", icon: "map" },
  ];

  const vehicleTypes = [
    { id: "van", label: "Van", icon: "van-icon" },
    { id: "integrated", label: "Fully Integrated", icon: "integrated-icon" },
    { id: "alcove", label: "Alcove", icon: "alcove-icon" },
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
