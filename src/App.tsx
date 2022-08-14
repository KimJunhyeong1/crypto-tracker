import { Route, Routes } from "react-router-dom";

import Chart from "./components/Chart";
import Price from "./components/Price";
import GlobalStyle from "./components/shared/GlobalStyle";
import Coin from "./pages/Coin";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:coinId" element={<Coin />}>
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
