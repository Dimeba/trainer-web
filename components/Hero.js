import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <div
      className={styles.hero}
    >
      <p className={styles.name}>Petar Šalović</p>
      <h1>
        VAŠ PARTNER U <br /> ZDRAVLJU I FITNESU
      </h1>
      <hr className={styles.separator}></hr>
      <p className={styles.invitation}>
        Hvala vam što ste posetili moju web stranicu, stojim vam <br /> na
        raspolaganju da zajedno ostvarimo vaše ciljeve!
      </p>
      <form>
        <input type="button" value="Kontakt" />
      </form>
    </div>
  );
};

export default Hero;
