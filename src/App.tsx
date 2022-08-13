import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./components/shared/GlobalStyle";
import Coin from "./pages/Coin";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:coinId" element={<Coin />} />
      </Routes>
    </>
  );
}

export default App;
