import { useContext } from "react";
import { FilterContext } from "@components/FilterProvider";
import { categories } from "./data";

import styles from "./Categories.module.scss";

const Categories = () => {
  const {
    filterState: { category },
    filterDispatch,
  } = useContext(FilterContext);

  return (
    <div className={styles.categories}>
      <ul className={styles.list}>
        {categories.map(({ id, title }) => (
          <li
            className={`${styles.item} ${
              category === title ? styles.active : ""
            }`}
            key={id}
            onClick={() => {
              filterDispatch({
                category: title,
                searchValue: "",
                skipItems: 0,
              });
            }}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
