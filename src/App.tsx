import React, { useState } from "react";
import { Layout } from "antd";
import { Toaster } from "react-hot-toast";

import { IResData } from "./types/types";
import Chart from "./components/contents/Chart";
import SearchBar from "./components/contents/SearchBar";

function App() {
  const [resData, setResData] = useState<IResData[]>([]);

  return (
    <Layout>
      <SearchBar resData={resData} setResData={setResData} />
      <Chart resData={resData} />
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
