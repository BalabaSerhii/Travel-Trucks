import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CamperDetailsPage from "./pages/CamperDetailsPage/CamperDetailsPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
    
    <Header/>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/catalog" element={<CatalogPage />} />
    <Route path="/catalog/:id" element={<CamperDetailsPage />} />
  </Routes>
    </>
);
}

export default App;
