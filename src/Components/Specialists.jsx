import lesleyhull from '../Assets/lesleyhull.png';
import ahmadkhan from '../Assets/ahmadkhan.png';
import ahmadstevens from '../Assets/ahmadstevens.png';
import ankulsharma from '../Assets/ankulsharma.png';
import heenasachdeva from '../Assets/heenasachdeva.png';
import { Container } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const Specialists = () => {
    return ( 
        <div className="specialists">
            <h2>Our Medical Specialist</h2>
            <div className='specialists-cards'>
                <Container>
                    <Swiper
                        slidesPerView={3}
                        modules={[Pagination]}
                        loop={true}
                    >
                        <SwiperSlide>
                            <div className='specialist-card'>
                                <img src={lesleyhull} alt='lesleyhull' />
                                <p>Dr.Lesley Hull</p>
                                <h6>Medicine</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='specialist-card'>
                                <img src={ahmadkhan} alt='ahmadkhan' />
                                <p>Dr.Ahmad Khan</p>
                                <h6>Neurologist</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='specialist-card'>
                                <img src={heenasachdeva} alt='heenasachdeva' />
                                <p>Dr.Heena Sachdeva</p>
                                <h6>Orthopadics</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='specialist-card'>
                                <img src={ankulsharma} alt='ankulsharma' />
                                <p>Dr.Ankul Sharma</p>
                                <h6>Medicine</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='specialist-card'>
                                <img src={ahmadstevens} alt='ahmadstevens' />
                                <p>Dr.Ahmad Stevens</p>
                                <h6>Neurologist</h6>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </div>
        </div>
     );
}
 
export default Specialists;