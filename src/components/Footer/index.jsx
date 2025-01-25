import { socialList } from "./data";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <small>@ 2024, ALL RIGHTS RESERVED</small>
      <ul className={styles.list}>
        {socialList.map(({ id, title, img, link }) => (
          <li key={id}>
            <a
              className={styles.link}
              href={link}
              target="_blank"
              title={title}
            >
              {img}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
