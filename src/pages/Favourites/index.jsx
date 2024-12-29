import { useContext, useState } from "react";
import { FavouritesContext } from "@components/FavouritesProvider";
import PageTransition from "@components/PageTransition";
import Card from "@components/Card";
import Button from "@components/Button";
import Modal from "@components/Modal";

import IMG from "../../assets/icons/bg.svg";
import styles from "./Favourites.module.scss";

const Favourites = () => {
  const {
    favouritesState: { favouritesList },
    favouritesDispatch,
  } = useContext(FavouritesContext);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState(0);

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

  const currentItem = favouritesList?.find((item) => item.id === currentId);

  return (
    <div className={styles.favourites}>
      <PageTransition />
      <div className={styles.header}>
        <h1 className={styles.title}>Favourites</h1>
      </div>
      {favouritesList.length > 0 ? (
        <>
          <div className={styles.cards}>
            {favouritesList.map((item) => (
              <Card
                handleClick={() => handleAddFavourites(item)}
                handleOpenModal={handleOpenModal}
                active={
                  favouritesList.findIndex((obj) => obj.id === item.id) !== -1
                }
                key={item.id}
                {...item}
              />
            ))}
          </div>
          <div className={styles.buttonWrapper}>
            <Button onClick={() => favouritesDispatch({ type: "clear" })}>
              Clear all
            </Button>
          </div>
        </>
      ) : (
        <div className={styles.empty}>
          <img
            className={styles.emptyImage}
            src={IMG}
            alt=""
            width={400}
            height={266}
          />
          <p>There are no favorite recipes in the list yet.</p>
        </div>
      )}
      {isOpenModal && currentItem && (
        <Modal item={currentItem} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default Favourites;
