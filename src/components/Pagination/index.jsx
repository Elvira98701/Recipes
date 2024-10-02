import { useContext } from "react";
import { FilterContext } from "@components/FilterProvider";
import styles from "./Pagination.module.scss";

const Pagination = ({ totalItems }) => {
  const {
    filterState: { skipItems },
    filterDispatch,
  } = useContext(FilterContext);
  const paginationLenght = Math.ceil(totalItems / 8);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.item}
        onClick={() => filterDispatch({ skipItems: skipItems - 1 })}
        disabled={skipItems === 0}
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#eeeeee"
          viewBox="0 0 256 256"
        >
          <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
        </svg>
      </button>
      {[...new Array(paginationLenght)].map((_, i) => (
        <button
          className={`${styles.item} ${skipItems === i ? styles.active : ""}`}
          key={i}
          onClick={() => filterDispatch({ skipItems: i })}
          type="button"
        >
          {i + 1}
        </button>
      ))}
      <button
        className={styles.item}
        onClick={() => filterDispatch({ skipItems: skipItems + 1 })}
        type="button"
        disabled={skipItems === paginationLenght - 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#eeeeee"
          viewBox="0 0 256 256"
        >
          <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
