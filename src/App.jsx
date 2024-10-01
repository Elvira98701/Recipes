import { Route, Routes } from "react-router-dom";

import Header from "@components/Header";
import Home from "@pages/Home";
import Favourites from "@pages/Favourites";
import FilterProvider from "@components/FilterProvider";
import FavouritesProvider from "@components/FavouritesProvider";

import "@styles/index.scss";
import { AnimatePresence } from "framer-motion";
import Footer from "@components/Footer";

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
