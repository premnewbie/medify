import card1 from '../Assets/card1.png';
import card2 from '../Assets/card2.png';
import { Container } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const OfferCards = () => {
    return (
        <div className='offer-cards'>
            <Container>
                <Swiper 
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={card1} alt='offer-card1' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={card2} alt='offer-card2' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={card1} alt='offer-card1' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={card2} alt='offer-card2' />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </div>
     );
}
 
export default OfferCards;