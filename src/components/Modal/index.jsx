import Button from "@components/Button";

import styles from "./Modal.module.scss";

const Modal = ({ item = [], handleCloseModal }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <img className={styles.bigImage} src={item.image} alt="name" />
          <div className={styles.info}>
            <h3 className={styles.overlayTitle}>{item.name}</h3>
            <ul className={styles.informationList}>
              <li>
                <b>Calories:</b> {item.caloriesPerServing}
              </li>
              <li>
                <b>Cook Time:</b> {item.cookTimeMinutes} min
              </li>
              <li>
                <b>Difficulty:</b> {item.difficulty}
              </li>
              <li>
                <b>Servings:</b> {item.servings}
              </li>
            </ul>
          </div>
          <div className={styles.buttonWrapper}>
            <Button onClick={handleCloseModal}>close</Button>
          </div>
        </div>
        <div>
          <h4 className={styles.subtitle}>Ingredients</h4>
          <ul className={styles.ingredientsList}>
            {item.ingredients.map((ingredient, i) => (
              <li className={styles.ingredientsItem} key={i}>
                {ingredient}
              </li>
            ))}
          </ul>
          <h4 className={styles.subtitle}>Instructions</h4>
          <ol className={styles.instructionsList}>
            {item.instructions.map((instruction, i) => (
              <li className={styles.instructionsItem} key={i}>
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Modal;
