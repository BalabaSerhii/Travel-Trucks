import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CamperDetailsPage from "./pages/CamperDetailsPage/CamperDetailsPage";
import style from "../src/App.module.scss";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import './components/FormComponent/CalendarStyles.scss'

function App() {
  return (
    <div className={style.container}>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />} />
        </Routes>
      </SharedLayout>
    </div>
  );
}

export default App;
