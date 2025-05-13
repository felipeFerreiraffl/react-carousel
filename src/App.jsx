import styles from "./App.module.css";
import EmblaSlider from "./components/Slides/Embla";
import SwiperSlider from "./components/Slides/Swiper";
export default function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.ttl}>Slides com Swiper e Glide</h1>

      <SwiperSlider marginTop={48} />

      <EmblaSlider marginTop={64} />
    </div>
  );
}
