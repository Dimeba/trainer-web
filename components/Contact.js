import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div>
        Ukoliko ste spremni za transformaciju i želite da saznate više,
        kontaktirajte nas danas i<br />
        započnite svoje putovanje ka boljem zdravlju i kondiciji!
      </div>
      <div>
        Rezervišite svoje mesto na vreme, uplatom za tri meseca unapred i
        ostvarite 30% popusta!
      </div>
      <div> 065/8874 321 / petar.salovic@gmail.com</div>
    </div>
  );
};

export default Contact;
