import styles from "./styles.module.css";

export default function SwiperSlider({ marginTop }) {
  return (
    <div className={styles.container} style={{ marginTop: marginTop }}>
      <div className={styles["ttl-container"]}>
        <h1 className={styles.ttl}>Carrosel com Swiper JS</h1>
        <p className={styles.desc}>
          O Swiper é uma biblioteca React que permite realizar slides com uma
          enorme customização e sendo muito completo. Ele é compatível com
          frameworks como React, Vue, Angular, entre outros. <br />
          Há desvantagens como o seu tamanho (80 a 130kb), mas possui variedade
          de efeitos prontos para personalizar.
        </p>
      </div>
      <div className={styles.carousel}></div>
    </div>
  );
}
