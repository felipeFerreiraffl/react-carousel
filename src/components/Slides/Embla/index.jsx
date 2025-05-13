import useEmblaCarousel from "embla-carousel-react";
import styles from "./styles.module.css";
import images from "../../../assets/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useCallback, useEffect, useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

export default function EmblaSlider({ marginTop }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
  });
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => (emblaApi && emblaApi.scrollPrev(), [emblaApi])
  );

  const scrollNext = useCallback(
    () => (emblaApi && emblaApi.scrollNext(), [emblaApi])
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.container} style={{ marginTop: marginTop }}>
      <div className={styles["ttl-container"]}>
        <h1 className={styles.ttl}>Carrosel com Embla Carousel</h1>
        <p className={styles.desc}>
          O Embla Carousel é outra biblioteca famosa em relação a carroséis,
          sendo mais customizável e minimalista, focando em performance e
          escabilidade. Por ser extremamente personalizável, muitos dos seus
          efeitos devem ser feitos de forma manual, assim como ser muito leve em
          relação ao Swiper (~6kb).
        </p>
      </div>
      <div className={styles.carousel}>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {images.map((img) => (
              <div className="embla__slide">
                <LazyLoadImage
                  className={styles.img}
                  src={img.src}
                  alt={img.name}
                  delayMethod="debounce"
                  delayTime={300}
                  effect="blur"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${styles.btn} ${styles["prev-btn"]}`}
          type="button"
          onClick={scrollPrev}
          disabled={prevDisabled}
        >
          <FaCircleArrowLeft className={styles["btn-i"]} />
        </button>
        <button
          className={`${styles.btn} ${styles["next-btn"]}`}
          type="button"
          onClick={scrollNext}
          disabled={nextDisabled}
        >
          <FaCircleArrowRight className={styles["btn-i"]} />
        </button>
      </div>
    </div>
  );
}
