import Accessories from "./components/Accessories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ModelCard from "./components/ModelCard";

function App() {
  return (
    <>
      <Header />
      <ModelCard
        title="Model 3"
        bgImageUrl="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Meet-Model-Y-Desktop.jpg"
        hasBounceButton={true}
      />
      <ModelCard
        title="Cybertrukk"
        bgImageUrl="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Cybertruck-Tablet-US-v2.jpg"
        hasBounceButton={false}
      />
      <Accessories />
      <Footer />
    </>
  );
}

export default App;
