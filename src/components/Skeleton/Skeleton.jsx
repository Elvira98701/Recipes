import ContentLoader from "react-content-loader";
import styles from "./Skeleton.module.scss";

const Skeleton = (props) => (
  <ContentLoader
    className={styles.skeleton}
    speed={2}
    width={328}
    height={328}
    viewBox="0 0 328 328"
    backgroundColor="#696866"
    foregroundColor="#2e2e2e"
    {...props}
  >
    <rect x="7" y="5" rx="16" ry="16" width="320" height="320" />
  </ContentLoader>
);

export default Skeleton;
