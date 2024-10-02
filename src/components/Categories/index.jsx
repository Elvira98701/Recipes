import { useContext } from "react";
import { FilterContext } from "@components/FilterProvider";
import styles from "./Categories.module.scss";

const categories = [
  {
    id: 0,
    title: "all",
  },
  {
    id: 1,
    title: "dinner",
  },
  {
    id: 2,
    title: "lunch",
  },
  {
    id: 3,
    title: "snack",
  },
  {
    id: 4,
    title: "dessert",
  },
  {
    id: 5,
    title: "side dish",
  },
  {
    id: 6,
    title: "appetizer",
  },
  {
    id: 7,
    title: "snacks",
  },

  {
    id: 8,
    title: "breakfast",
  },
  {
    id: 9,
    title: "beverage",
  },
];

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
