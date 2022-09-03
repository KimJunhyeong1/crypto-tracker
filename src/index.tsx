import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <RecoilRoot>
        <Router>
          <App />
        </Router>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
