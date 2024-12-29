import { motion } from "framer-motion";

import styles from "./PageTransition.module.scss";

const PageTransition = () => {
  return (
    <>
      <motion.div
        className={styles.slideIn}
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        exit={{ y: "100%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
      <motion.div
        className={styles.slideOut}
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        exit={{ y: "100%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.1, 1] }}
      />
    </>
  );
};

export default PageTransition;
