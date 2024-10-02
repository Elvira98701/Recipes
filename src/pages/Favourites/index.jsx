import { useContext } from "react";
import { FavouritesContext } from "@components/FavouritesProvider";
import PageTransition from "@components/PageTransition";
import Card from "@components/Card";
import Button from "@components/Button";

import IMG from "../../assets/icons/bg.svg";
import styles from "./Favourites.module.scss";

const Favourites = () => {
  const {
    favouritesState: { favouritesList, favouritesIdList },
    favouritesDispatch,
  } = useContext(FavouritesContext);

  const handleAddFavourites = (obj) => {
    favouritesDispatch({
      type: "toggle_item",
      newItem: obj,
    });
  };

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
                active={favouritesIdList.includes(item.id)}
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
    </div>
  );
};

export default Favourites;
