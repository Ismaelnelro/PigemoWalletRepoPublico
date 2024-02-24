import { Link } from 'react-router-dom';


/*JSON*/
import reintegrosJSON from '../data/reintegros.json';
import descuentosJSON from '../data/mejoresDescuentos.json';


/*Icons*/
import movies from '/assets/benefit/categories/movies.svg';
import shopping from '/assets/benefit/categories/shopping.svg';
import groceries from '/assets/benefit/categories/groceries.svg';
import travel from '/assets/benefit/categories/travel.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import HeaderBack from '../components/ui/HeaderBack';


export interface Beneficios {
    id: string;
    company: string;
    image1?: string;
    image2?: string;
    description: string;
    condiciones: string;
}


interface ListItemType {
    category: string;
    ListIcon: string;
}


const CATEGORY_ITEMS: ListItemType[] = [
    {
        category: "diversion",
        ListIcon: movies
    },
    {
        category: "shopping",
        ListIcon: shopping
    },
    {
        category: "compras",
        ListIcon: groceries
    },
    {
        category: "viajes",
        ListIcon: travel
    }
]

function BenefitsPage(): JSX.Element {


    const [reintegros] = useState<Beneficios[]>(reintegrosJSON)
    const [descuentos] = useState<Beneficios[]>(descuentosJSON)


    return (
        <section className="select-none w-full pb-20 ">

            <HeaderBack title='Beneficios' />

            <div className='px-4 py-8 flex flex-col gap-8 md:items-center'>

                <div className='flex justify-center items-center'>
                    <input placeholder='Buscá un beneficio' className=' min-w-[20.75rem] w-full text-sm p-4 outline outline-1 outline-black rounded-md ' />
                </div>

                <p className='text-base font-semibold md:self-start'>Busca por categoria</p>

                <div className='flex  justify-between items-center md:gap-4 '>
                    {CATEGORY_ITEMS.map((item, index) => (
                        <button key={`${item}-${index}`} className=' h-16  w-16 md:h-20  md:w-36 bg-[#F9C55F38] rounded-xl'>
                            <img className='m-auto' src={item.ListIcon} alt={item.category} />
                        </button>
                    ))}
                </div>

                <p className='text-base font-semibold pb-4  md:self-start'> Reintegros</p>

                <article className=' md:self-start'>
                    <Swiper className='select-none h-[7rem]  max-w-fit' spaceBetween={20} slidesPerView={'auto'}>
                        {reintegros && reintegros.map((benefice, index) => (
                            <SwiperSlide key={index} className='max-w-fit h-[7rem]'>
                                <Link to={`/reintegros/${benefice.id}`}>
                                    <div className="w-[6.875rem] h-[6.438rem] rounded-xl shadow-md  bg-white ">
                                        <div className='h-8 bg-blue-100 rounded-t-xl flex justify-center items-center'>
                                            <p className='text-xl font-bold '>{benefice.description}</p>
                                        </div>
                                        <div className='h-16 rounded-b-xl object-cover w-full flex justify-center items-center '>
                                            <img src={benefice.image1} className='text-center w-16' alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </article>


                <p className='text-base font-semibold pb-4  md:self-start'> Los mejores descuentos</p>

                <article className=' md:self-start'>
                    <Swiper className='select-none h-[7rem] max-w-fit' spaceBetween={20} slidesPerView={'auto'}>
                        {descuentos && descuentos.map((descuento, index) => (
                            <SwiperSlide key={index} className='max-w-fit h-[7rem]'>
                                <Link to={`/descuento/${descuento.id}`}>
                                    <div className="w-[13.25rem] h-[5.875rem] flex rounded-xl shadow-md  bg-white relative">
                                        <div className='flex bg-blue-100 rounded-tl-xl rounded-bl-xl p-1'>
                                            <img src={descuento.image1} className='text-center w-16 p-2' alt="logo cinemark" width={16} height={16} />
                                        </div>

                                        <p className='absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-xl font-bold text-slate-900'>{descuento.description}</p>

                                        <div className='flex-1 rounded-b-xl object-cover w-full flex justify-end items-start '>
                                            <img src={descuento.image2} className='text-center w-16' alt="" />
                                        </div>
                                        <p className='absolute top-3/4 left-1/2  text-xs font-bold text-slate-900'>{descuento.condiciones}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </article>
            </div>
        </section>
    )
}


export default BenefitsPage;