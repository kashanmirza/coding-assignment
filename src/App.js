import React from "react";
import AppRoutes from "./components/AppRoutes";
import Layout from "./components/Layout";
import "./app.scss";

import "reactjs-popup/dist/index.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  );
};

export default App;
