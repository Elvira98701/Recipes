import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FilterContext } from "@components/FilterProvider";
import styles from "./Search.module.scss";

const Search = () => {
  const { filterDispatch } = useContext(FilterContext);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      filterDispatch({
        searchValue: inputValue,
        category: "all",
        skipItems: 0,
      });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inputValue, filterDispatch]);

  return (
    <div className={styles.search}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#696866"
        viewBox="0 0 256 256"
      >
        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
      </svg>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className={styles.input}
        placeholder="Type to search..."
        type="text"
      />

      <AnimatePresence initial={false}>
        {inputValue.length > 0 && (
          <motion.svg
            initial={{
              x: -50,
              y: "-50%",
              opacity: 0,
            }}
            animate={{
              x: 0,
              y: "-50%",
              opacity: 1,
            }}
            exit={{
              x: 50,
              y: "-50%",
              opacity: 0,
            }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 0.7,
            }}
            className={styles.backspaceIcon}
            onClick={() => setInputValue("")}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#696866"
            viewBox="0 0 256 256"
          >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;
