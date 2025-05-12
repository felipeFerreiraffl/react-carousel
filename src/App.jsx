import styles from "./App.module.css";
import SwiperSlider from "./components/Slides/Swiper";
export default function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.ttl}>Slides com Swiper e Glide</h1>

      <SwiperSlider />
    </div>
  );
}
