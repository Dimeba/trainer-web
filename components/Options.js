import styles from "./Options.module.scss";

const Options = () => {
  return (
    <section className={styles.offer}>
      <div>
        <h2>INDIVIDIUALNI TRENING</h2>
        <hr></hr>
        <p>
          Doživite personalizovani pristup i postignite <br /> fitnes ciljeve
          brže uz moje <br /> specijalizovane individualne treninge
          <br />
          prilagožene vašem tempu i potrebama.
        </p>
      </div>
      <div>
        <h2>ONLINE TRENING</h2>
        <hr></hr>
        <p>
          Uz moj online trening, uživajte u<br />
          fleksibilnosti i profesionalnom voženju gdje
          <br />
          god se nalazili, sve što vam je potrebno je
          <br />
          internet konekcija.
        </p>
      </div>
      <div>
        <h2>PLAN ISHRANE</h2>
        <hr></hr>
        <p>
          Optimizujte svoje rezultate kroz
          <br />
          prialgođene planove ishrane koji će <br /> vam pomoći da ostvarite
          balansiranu <br /> dijetu i postignete zdraviji način života.{" "}
        </p>
      </div>
    </section>
  );
};

export default Options;
