import styles from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <div className={styles.experience}>
        <p className={styles.highlight}>2500+</p>
        <p>zadovoljnih klijenata</p>
      </div>
      <div className={styles.years}>
        <p className={styles.highlight}>13</p>
        <p>Godina iskustva</p>
      </div>
      <div>
        <p className={styles.brief}>
          Kao neko ko je ceo zivot u sportu od ekipnih sportova fudbala i
          rukometa, nekako me je uvek vukla <br /> zelja ka fitnesu i da pomazem
          drugim ljudima u ostvarenju svojih snova. Trenerskim poslom se <br />{" "}
          bavim zadnjih 13 godina. U dosadasnjoj karijeri kao personalni trener,
          trenirao sam preko 2500 ljudi.
          <br /> Posao personalnog trenera nije samo "uradi 3x10" već mnogo vise
          od toga. U ovom poslu rad sa
          <br /> ljudima zahteva kako fizicke tako i mentalne vestine.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
