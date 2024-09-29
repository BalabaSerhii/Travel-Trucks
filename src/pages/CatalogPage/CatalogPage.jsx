import CamperCard from "../../components/CamperCard/CamperCard";
import FilterForm from "../../components/FilterForm/FilterForm";
import style from "./CatalogPage.module.scss";
import { useState } from "react";

function CatalogPage() {
  const [filters, setFilters] = useState({ selectedEquipment: [], selectedVehicleType: null });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className={style.container}>
      <CamperCard filters={filters} />
      <FilterForm onFilterChange={handleFilterChange} />
    </div>
  );
}

export default CatalogPage;
