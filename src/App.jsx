import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "@components/Header";
import Home from "@pages/Home";
import Favourites from "@pages/Favourites";
import FilterProvider from "@components/FilterProvider";
import FavouritesProvider from "@components/FavouritesProvider";
import Footer from "@components/Footer";

import "@styles/index.scss";

function App() {
  return (
    <div className="App">
      <FavouritesProvider>
        <FilterProvider>
          <Header />
          <div className="container">
            <AnimatePresence mode="wait">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/favourites" element={<Favourites />} />
              </Routes>
            </AnimatePresence>
          </div>
        </FilterProvider>
      </FavouritesProvider>
      <Footer />
    </div>
  );
}

export default App;
