import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";

import Chart from "./components/Chart";
import Price from "./components/Price";
import GlobalStyle from "./components/shared/GlobalStyle";
import Coin from "./pages/Coin";
import MainPage from "./pages/MainPage";
import { darkTheme, lightTheme } from "./theme";
import darkModeAtom from "./recoil/darkMode";

function App() {
  const isDarkMode = useRecoilValue(darkModeAtom);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:coinId" element={<Coin />}>
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
