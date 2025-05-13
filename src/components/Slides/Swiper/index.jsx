import { useRef } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "../../../assets/images";
import styles from "./styles.module.css";

export default function SwiperSlider({ marginTop }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
      <div className={styles.carousel}>
        {/* 
          Uso de refs para botões 100% customizáveis
          Os botões devem ser referenciados antes do Swiper, para não serem renderizados como "null"
        */}
        <button ref={prevRef} className={`${styles.btn} ${styles["prev-btn"]}`}>
          <FaCircleArrowLeft size={80} />
        </button>
        <button ref={nextRef} className={`${styles.btn} ${styles["next-btn"]}`}>
          <FaCircleArrowRight size={80} />
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {images.map((img) => (
            <SwiperSlide key={img}>
              <LazyLoadImage
                className={styles.img}
                src={img.src}
                alt={img.name}
                delayMethod="debounce"
                delayTime={300}
                effect="blur"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
