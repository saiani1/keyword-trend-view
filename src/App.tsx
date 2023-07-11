import { Layout } from "antd";
import { Toaster } from "react-hot-toast";

import Chart from "./components/contents/Chart";
import SearchBar from "./components/contents/SearchBar";

function App() {
  return (
    <Layout style={{ marginTop: "100px" }}>
      <SearchBar />
      <Chart />
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
