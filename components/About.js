import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <div>
        <p>
          U opisu posla svakog ozbiljnog trenera kome je stalo do svog vezbača
          jeste da prepozna u kakvom je mentalnom stanju vezbač došao na
          trening, da li je umoran, neispavan, rasejan, itd..i prema stanju 
          trener koncipira trening. Svoj posao smatram odgovornim, pa se tako i
          ophodim prema njemu.
        </p>
      </div>
    </div>
  );
};

export default About;
