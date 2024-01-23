import styles from "./Option.module.scss";

const Option = ({ title, description }) => {
  return (
    <div className={styles.option}>
      <h2>{title}</h2>
      <hr></hr>
      <p>{description}</p>
    </div>
  );
};

export default Option;
