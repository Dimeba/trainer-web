import styles from "./Questions.module.scss";

const Questions = () => {
  return (
    <section className={styles.questions}>
      <h2>Česta pitanja</h2>
      <div className={styles.group}>
        <div>
          <h3>
            Da li mogu trenirati samo <br /> odredjene grupe mišića?
          </h3>
          <hr></hr>
          <p>
            Ne, telo funkcioniše kao celina i<br /> samim tim potrebno je imati
            takav
            <br /> pristup pri planiranju treninga.
          </p>
        </div>
        <div>
          <h3>
            Da li mogu izgraditi
            <br /> mišići za mesec dana
          </h3>
          <hr></hr>
          <p>
            Izgradnja mišića je složen proces za
            <br /> koji je potrebno vreme. Brzina <br />
            izgradnje mišića zavisi od više faktora, <br /> ishrane, treninga,
            odmora, genetike.
          </p>
        </div>
        <div>
          <h3>
            Da li su
            <br /> vaši termini fiksni?
          </h3>
          <hr></hr>
          <p>
            Sve je stvar dogovora, termini se <br /> ugovaraju unapred i mogu
            biti <br /> fleksobilni u zavisnosti od <br /> obaveza klijenta.
          </p>
        </div>
        <div>
          <h3>
            Koliko je ishrana bitna
            <br /> u procesu treninga?
          </h3>
          <hr></hr>
          <p>
            Ishrana je sastavni deo trenina, ali i <br /> bitna stavka ukoliko
            se osoba opredeli
            <br /> za zdrav stil života.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Questions;
