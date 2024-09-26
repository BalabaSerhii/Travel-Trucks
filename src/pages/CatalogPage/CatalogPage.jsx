import CamperCard from "../../components/CamperCard/CamperCard";
import IconComponent from "../../components/IconComponent/IconComponent";
import { fetchAllCampers } from "../../api/campersAPI";

function CatalogPage() {
  console.log(fetchAllCampers);
  return (
    <div>
      <CamperCard />
      {/* <svg >
        <use xlinkHref="#wind"></use>
      </svg> */}
      <IconComponent id="lip0_12140_330" />
    </div>
  );
}

export default CatalogPage;
