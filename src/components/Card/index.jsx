import Button from "@components/Button";

import styles from "./Card.module.scss";

const Card = ({
  id,
  name,
  image,
  rating,
  handleClick,
  active,
  handleOpenModal,
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.description}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.body}>
          <Button
            onClick={(event) => {
              event.stopPropagation();
              handleOpenModal(id);
            }}
          >
            View
          </Button>
          <svg
            onClick={handleClick}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill={active ? "#e25e20" : "#eeeeee"}
            viewBox="0 0 256 256"
          >
            <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"></path>
          </svg>
        </div>
      </div>
      <span className={styles.rating}>{rating}</span>
    </div>
  );
};

export default Card;
