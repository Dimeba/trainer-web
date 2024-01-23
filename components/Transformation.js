import styles from "./Transformation.module.scss";

const Transformation = () => {
  return (
    <section className={styles.transformation}>
      <h2>TRANSFORMACIJE</h2>
      <div>
        <img src={styles.first} alt="Transformacija1"></img>
        <img className={styles.second} src="" alt="Transformacija2"></img>
        <img className={styles.third} src="" alt="Transformacija3"></img>
        <div className={styles.moto}>
          Ono što mene najviše ispunjava kao trenera jeste osmeh, zadovoljstvo i
          napredak kod klijenta. <br />
          Kada bi mog klijenta pitali zašto Petar kao trener, dobili bi odgovor
          jer je posvećen, predan, i zna svoj posao.
        </div>
      </div>
    </section>
  );
};

export default Transformation;
