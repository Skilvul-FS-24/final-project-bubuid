import "./App.css";
import LandingPage from "./components/landingpage/landingpage";
import AboutBullying from "./components/aboutbullying/aboutbullying";
import Konseling from "./components/konseling/konseling";
import DetailPsikolog from "./components/konseling/detailpsikolog";
import Artikel from "./components/artikel/artikel";
import BacaArtikel from "./components/baca-artikel/bacaartikel";
import Login from "./components/login/login";
import Regis from "./components/regis/regis";

import { Link, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/routing/privateRoute";
import AboutUs from "./components/aboutus/aboutus";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Regis />} />
        <Route element={<PrivateRoute />}>
          <Route path="aboutbullying" element={<AboutBullying />} />
          <Route path="konseling" element={<Konseling />} />
          <Route path="konseling/:id" element={<DetailPsikolog />} />
          <Route path="artikel" element={<Artikel />} />
          <Route path="artikel/:id" element={<BacaArtikel />} />
          <Route path="aboutus" element={<AboutUs/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
