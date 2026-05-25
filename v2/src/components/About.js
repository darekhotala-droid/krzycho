import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutText}>
        <h2>Escape to Nature</h2>
        <p>Dalakit House Villa Two is a unique apartment for couples, located in the peaceful, natural scenery of Lambojon on Siquijor island. Far from the city noise, our villa offers a true rainforest experience.</p>
        <p>Wake up to the singing of birds, watch butterflies from your private terrace, and breathe in the cool, mountain air. It's a place where time slows down – perfect for a romantic getaway and a digital detox (though with excellent internet!).</p>
      </div>
      <div className={styles.aboutImage}>
        <img src="/images/c176c3ff-164a-499e-acec-ac2d26aaab1e.avif" alt="Jungle Villa" />
      </div>
    </section>
  );
}
