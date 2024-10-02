import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FilterContext } from "@components/FilterProvider";
import styles from "./Sort.module.scss";

const sortList = [
  { id: 0, name: "Name", sort: "name" },
  { id: 1, name: "Rating", sort: "rating" },
  { id: 2, name: "Calories", sort: "caloriesPerServing" },
];

const Sort = () => {
  const {
    filterState: { sortType, order },
    filterDispatch,
  } = useContext(FilterContext);

  const [open, setOpen] = useState(false);
  const sortName = sortList.filter((item) => item.sort === sortType)[0].name;

  useEffect(() => {
    const handleClickOutside = () => {
      setOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={styles.sort}>
      <div className={styles.label}>
        <svg
          className={styles.icon}
          style={{ transform: order ? "" : "rotate(180deg)" }}
          onClick={() => filterDispatch({ order: !order })}
          width="15"
          height="10"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>{" "}
        <span
          onClick={(event) => {
            event.stopPropagation();
            setOpen(!open);
          }}
        >
          {sortName}
        </span>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className={styles.popup}
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: 100,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 0.7,
            }}
          >
            <ul className={styles.list}>
              {sortList.map(({ id, name, sort }) => (
                <li
                  className={`${styles.item} ${
                    sort === sortType ? styles.active : ""
                  }`}
                  key={id}
                  onClick={() => filterDispatch({ sortType: sort })}
                >
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sort;
