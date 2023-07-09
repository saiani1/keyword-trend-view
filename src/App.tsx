import React from "react";
import { Layout } from "antd";

import Chart from "./components/contents/Chart";
import SearchBar from "./components/contents/SearchBar";

function App() {
  return (
    <Layout>
      <SearchBar />
      <Chart />
    </Layout>
  );
}

export default App;
