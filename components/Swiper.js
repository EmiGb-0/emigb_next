import styles from '../styles/Inicio.module.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle'

const SwiperFrases = () => {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={60}
                slidesPerView={1}
                navigation
            >
            <div>
                <SwiperSlide>
                    <blockquote className={`${styles.card}`}>
                        <p>El codigo es la base de todo.</p>
                        <br />
                        <p>- Anonimo</p>
                    </blockquote>
                </SwiperSlide>
                <SwiperSlide>
                    <blockquote className={`${styles.card}`}>
                        <p>Si tu negocio no está en internet, tu negocio no existe.</p>
                        <br />
                        <p>- Bill Gates</p>
                    </blockquote>
                </SwiperSlide>
                <SwiperSlide>
                    <blockquote className={`${styles.card}`}>
                        <p>Está bien celebrar el éxito, pero es más importante prestar atención a las lecciones del fracaso.</p>
                        <br />
                        <p>- Bill Gates</p>
                    </blockquote>
                </SwiperSlide>
                <SwiperSlide>
                    <blockquote className={`${styles.card}`}>
                        <p>Creo que es posible que la gente normal elija ser extraordinaria.</p>
                        <br />
                        <p>- Elon Musk</p>
                    </blockquote>
                </SwiperSlide>
            </div>
        </Swiper>
        </>
    )
}

export default SwiperFrases
