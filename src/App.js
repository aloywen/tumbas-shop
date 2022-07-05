import Hero from "./components/hero";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Category from "./components/category";
import Special from "./components/special";
import Recomended from "./components/recomended"
import Subscribe from "./components/subscribe";
import Help from "./components/help";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Category />
      <Hero />
      <Special />
      <Recomended />
      <Subscribe />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
