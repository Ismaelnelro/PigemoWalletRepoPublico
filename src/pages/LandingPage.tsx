import React, { useState } from 'react';


/*React icons*/
import { GoPaperAirplane } from 'react-icons/go';
import { BiQrScan, BiTrendingUp } from 'react-icons/bi';

/*images*/
import movimientos from '/assets/landing/movimientos.svg'
import pagos from '/assets/landing/pagos.svg'
import transferencias from '/assets/landing/transferencias.svg'


/*UI Components*/
import Button from '../components/ui/Button';
import Anchor from '../components/ui/Anchor';
import { useNavigate } from 'react-router-dom';



interface Onboarding {
    image: string;
    title: string;
    subtitle: string;
    ListIcon: React.ReactNode;
}

const ONBOARDING: Onboarding[] = [
    {
        image: transferencias,
        title: "Transferí dinero",
        subtitle: "Enviá dinero desde tu cuenta Pigmeo a cualquier persona de manera segura.",
        ListIcon: <GoPaperAirplane />,
    },

    {
        image: pagos,
        title: "Pagá con QR",
        subtitle: "Pagá en los locales adheridos con QR y obtené descuentos increíbles.",
        ListIcon: <BiQrScan />,
    },
    {
        image: movimientos,
        title: "Controlá tus movimientos",
        subtitle: "Realizá un seguimiento de tu actividad para controlar tus movimientos.",
        ListIcon: <BiTrendingUp />
        ,
    }

];
const LandingPage = () => {

    const [currentInfo, setCurrentInfo] = useState(0);
    const navigate = useNavigate()

    const handdleCurrenInfo = () => {
        if (currentInfo < 2) {
            setCurrentInfo(currentInfo + 1)
        } else {
            navigate('/auth/register')
        }
    }

    return (
        // {intro && <IntroComponent />}
        <main className='w-full h-screen min-h-[500px] flex flex-col items-center md:justify-center gap-16'>
            <div className='flex flex-col gap-5'>
                <section className='flex h-auto flex-wrap justify-center md:items-center gap-8 lg:gap-0 '>
                    <div className='flex flex-col lg:flex-row justify-center items-center relative'>
                        <img src={ONBOARDING[currentInfo].image} alt={ONBOARDING[currentInfo].title} width={400} />
                        <div className='absolute -bottom-4 block md:block lg:hidden text-2xl bg-slate-200 p-2 rounded-full text-[rgba(59,27,128,1)] '>{ONBOARDING[currentInfo].ListIcon}</div>
                    </div>
                    <div className='w-[80%]  lg:w-auto  flex flex-col items-center gap-4 text-center transition-all duration-300'>
                        <p className='font-semibold text-2xl   text-[rgba(59,27,128,1)]'>{ONBOARDING[currentInfo].title}</p>
                        <p className='lg:block md:hidden hidden  text-xl font-bold text-[rgba(59,27,128,1)] '>{ONBOARDING[currentInfo].ListIcon}</p>
                        <p className=''>{ONBOARDING[currentInfo].subtitle}</p>
                    </div>
                </section>

                <section className='md:hidden flex justify-center p-4 gap-4'>
                    <input type="radio" name='landing' value={currentInfo} checked={currentInfo === 0} readOnly />
                    <input type="radio" name='landing' value={currentInfo} checked={currentInfo === 1} readOnly />
                    <input type="radio" name='landing' value={currentInfo} checked={currentInfo === 2} readOnly />
                </section>
            </div>

            <section className='w-full flex flex-wrap justify-center p-4 gap-4'>
                <Button onClick={handdleCurrenInfo}>{(currentInfo === 2) ? "Crear mi cuenta" : "Siguiente"}</Button>
                <Anchor to={`${(currentInfo === 2) ? "auth/login" : "auth/login"}`}>{(currentInfo === 2) ? "Ya tengo cuenta" : "Saltar"}</Anchor>
            </section>
        </main>
    )
}

export default LandingPage