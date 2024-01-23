import styles from "./SocialIcons.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div className={styles["social-icons"]}>
      <a
        href="https://www.facebook.com/your-facebook-page"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/your-instagram-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
};

export default SocialIcons;

