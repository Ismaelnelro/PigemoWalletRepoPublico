import { Link } from 'react-router-dom';
import beneficios from '../../data/beneficios.json'


/*Swiper*/
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function BenefitsHome(): JSX.Element {

    console.log(beneficios[0].image_1);
    
    const styles = {
        backgroundSize: 'fit-content',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };


    return (
        <section className='pt-16 w-[22rem] m-auto md:w-full md:px-3'>
            <div className='w-full flex  justify-between items-end'>
                <p className='text-base font-semibold  text-black'>Beneficios</p>
                <Link to={"/benefit"}
                    className='text-sm font-medium  text-primary-600'>
                    Ver todos
                </Link>
            </div>
            <div className='py-2'>

                <Swiper
                    className='select-none'
                    spaceBetween={20}
                    slidesPerView={'auto'}
                    slideClass='max-w-fit'
                >
                    {beneficios.map((benefice, index) => (
                        <SwiperSlide key={index} className='max-w-fit h-40'>
                            <div key={index} className={`w-[13.625rem] h-[5.938rem] rounded-lg flex justify-center items-center`}
                                style={{
                                    ...styles,
                                    backgroundImage: `url(${benefice.image_1})`
                                }}
                            >
                                <div className='flex  flex-col items-center'>
                                    <p className={`font-bold   text-xs text-primary flex justify-start  text-white  w-[150px]`}>{benefice.category}</p>
                                    <p className={`font-normal text-xs text-white flex justify-end  w-[150px]`}>{benefice.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default BenefitsHome;