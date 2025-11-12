import Header from "./components/Header";
import Layout from "./components/Layout";
import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <div className="max-w-2xl mx-auto mt-6">
          <Stories />
          <Posts />
        </div>
        <Sidebar />
      </Layout>
    </>
  );
}

export default App;
