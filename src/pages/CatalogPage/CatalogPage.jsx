import CamperCard from "../../components/CamperCard/CamperCard";
import FilterForm from "../../components/FilterForm/FilterForm";
import IconComponent from "../../components/IconComponent/IconComponent";
import CamperDetailsPage from "../CamperDetailsPage/CamperDetailsPage";
import style from "./CatalogPage.module.scss";
function CatalogPage() {
  return (
    <div className={style.container}>
      <CamperCard />
      {/* <CamperDetailsPage/> */}
      <IconComponent id="lip0_12140_330" />
      <FilterForm/>
    </div>
  );
}

export default CatalogPage;
