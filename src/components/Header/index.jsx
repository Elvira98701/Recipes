import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "@components/Logo";
import Search from "@components/Search";
import { FavouritesContext } from "@components/FavouritesProvider";

import styles from "./Header.module.scss";

const Header = () => {
  const {
    favouritesState: { favouritesList },
  } = useContext(FavouritesContext);
  const { pathname } = useLocation();

  return (
    <header className={`${styles.header} container`}>
      <Logo />
      <div className={styles.wrapper}>
        {pathname !== "/favourites" && <Search />}
        <Link
          to="/favourites"
          className={styles.favouritesLink}
          aria-label="favourites"
          title="Go to Favorites"
        >
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#e25e20"
            viewBox="0 0 256 256"
          >
            <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
          </svg>
          <AnimatePresence initial={false}>
            {favouritesList.length > 0 && (
              <motion.span
                className={styles.counter}
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0,
                  opacity: 0,
                }}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.7,
                }}
              >
                {favouritesList.length}
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>
    </header>
  );
};

export default Header;
