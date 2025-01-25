import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

import useFetch from "@hooks/useFetch";

import Categories from "@components/Categories";
import Sort from "@components/Sort";
import Card from "@components/Card";
import Pagination from "@components/Pagination";
import Skeleton from "@components/Skeleton/Skeleton";
import { FilterContext } from "@components/FilterProvider";
import { FavouritesContext } from "@components/FavouritesProvider";
import PageTransition from "@components/PageTransition";
import Modal from "@components/Modal";

import styles from "./Home.module.scss";

const Home = () => {
  const {
    filterState: { searchValue, category, sortType, order, skipItems },
  } = useContext(FilterContext);
  const {
    favouritesState: { favouritesList },
    favouritesDispatch,
  } = useContext(FavouritesContext);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const { items, total, isLoading } = useFetch(
    searchValue.length > 0
      ? `https://dummyjson.com/recipes/search?q=${searchValue}&sortBy=${sortType}&order=${
          order ? "asc" : "desc"
        }&limit=8&skip=${skipItems * 8}`
      : `https://dummyjson.com/recipes${
          category === "all" ? "" : `/meal-type/${category}`
        }?sortBy=${sortType}&order=${order ? "asc" : "desc"}&limit=8&skip=${
          skipItems * 8
        }`
  );

  useEffect(() => {
    document.body.addEventListener("click", handleCloseModal);
    return () => document.body.removeEventListener("click", handleCloseModal);
  }, []);

  const handleAddFavourites = (obj) => {
    favouritesDispatch({
      type: "toggle_item",
      newItem: obj,
    });
  };

  const handleOpenModal = (id) => {
    setIsOpenModal(true);
    setCurrentId(id);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const currentItem = items?.find((item) => item.id === currentId);

  return (
    <main className={styles.container}>
      <PageTransition />
      <div className={styles.aside}>
        <Categories />
      </div>
      <section className={styles.content}>
        <div className={styles.heading}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 1,
            }}
          >
            Recipes
          </motion.h1>
          <Sort />
        </div>
        <div className={styles.cards}>
          {isLoading ? (
            [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          ) : items.length > 0 ? (
            items.map((item) => (
              <Card
                handleClick={() => handleAddFavourites(item)}
                handleOpenModal={handleOpenModal}
                active={
                  favouritesList.findIndex((obj) => obj.id === item.id) !== -1
                }
                key={item.id}
                {...item}
              />
            ))
          ) : (
            <div className={styles.noResults}>No results</div>
          )}
        </div>
        {items.length > 0 && <Pagination totalItems={total} />}
      </section>
      {isOpenModal && currentItem && (
        <Modal item={currentItem} handleCloseModal={handleCloseModal} />
      )}
    </main>
  );
};

export default Home;
