import { useEffect, useRef, useState } from "react";
import Button from "@components/Button";
import styles from "./Card.module.scss";

const Card = ({
  name,
  image,
  rating,
  handleClick,
  active,
  ingredients = [],
  instructions = [],
  cookTimeMinutes,
  caloriesPerServing,
  difficulty,
  servings,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    if (openModal) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [openModal]);

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.description}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.body}>
          <Button onClick={() => setOpenModal(true)}>View</Button>
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

      <dialog className={styles.overlay} ref={modalRef}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <img className={styles.bigImage} src={image} alt="name" />
            <div className={styles.info}>
              <h3 className={styles.overlayTitle}>{name}</h3>
              <ul className={styles.informationList}>
                <li>
                  <b>Calories:</b> {caloriesPerServing}
                </li>
                <li>
                  <b>Cook Time:</b> {cookTimeMinutes} min
                </li>
                <li>
                  <b>Difficulty:</b> {difficulty}
                </li>
                <li>
                  <b>Servings:</b> {servings}
                </li>
              </ul>
            </div>
            <div className={styles.buttonWrapper}>
              <Button onClick={() => setOpenModal(false)}>close</Button>
            </div>
          </div>
          <div>
            <h4 className={styles.subtitle}>Ingredients</h4>
            <ul className={styles.ingredientsList}>
              {ingredients.map((ingredient, i) => (
                <li className={styles.ingredientsItem} key={i}>
                  {ingredient}
                </li>
              ))}
            </ul>
            <h4 className={styles.subtitle}>Instructions</h4>
            <ol className={styles.instructionsList}>
              {instructions.map((instruction, i) => (
                <li className={styles.instructionsItem} key={i}>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Card;
