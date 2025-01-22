import type { ProjectType } from "@/types/types";
import styles from "./WorkShowcase.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import GitHubIcon from "./icons/GitHubIcon";
import ExternalIcon from "./icons/ExternalIcon";

interface WorkShowcaseProps {
  images: ImageMetadata[];
  title: string;
  type: ProjectType;
  date: string;
  codeUrl: string;
  liveUrl: string;
  children?: React.ReactNode;
}

export default function WorkShowcase({
  images,
  title,
  type,
  date,
  codeUrl,
  liveUrl,
  children
}: WorkShowcaseProps) {
  return (
    <div className={`layout-grid ${styles.container}`}>
      <Swiper
        className={styles.swiper}
        modules={[Mousewheel, Pagination]}
        spaceBetween={32}
        slidesPerView="auto"
        effect="coverflow"
        mousewheel={{
          enabled: true,
          forceToAxis: true
        }}
        pagination={{
          enabled: true,
          clickable: true
        }}
        centeredSlides
      >
        {images.map((im, idx) => (
          <SwiperSlide key={idx}>
            <img src={im.src} alt={`${title} showcase ${idx}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.info}>
        <header>
          <h5>{title}</h5>
          <h6>{type}</h6>
          <p>{date}</p>
        </header>
        <aside>
          <p>{children}</p>
          <footer>
            <a
              className="button"
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              Source code
            </a>
            <a
              className="button"
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View project
              <ExternalIcon />
            </a>
          </footer>
        </aside>
      </div>
    </div>
  );
}
