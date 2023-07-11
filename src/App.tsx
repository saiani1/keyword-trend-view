import React from "react";
import { useSelector } from "react-redux";

import { Layout } from "antd";
import { Toaster } from "react-hot-toast";

import Chart from "./components/contents/Chart";
import SearchBar from "./components/contents/SearchBar";
import type { RootState } from "./store/store";

function App() {
  const transformResData = useSelector(
    (state: RootState) => state.transformResData
  );
  console.log(transformResData);

  return (
    <Layout style={{ marginTop: "100px" }}>
      <SearchBar />
      {transformResData.length !== 0 && <Chart />}
      <Toaster
        containerStyle={{
          top: 20,
        }}
        toastOptions={{
          duration: 2000,
        }}
      />
    </Layout>
  );
}

export default App;
