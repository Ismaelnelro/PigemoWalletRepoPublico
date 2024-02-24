import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/*UI-Components*/
import HeaderBack from "../components/ui/HeaderBack";

/*JSON*/
import reintegrosJSON from '../data/reintegros.json';

/*Interfaces*/
import { Beneficios } from "./BenefitsPage";

/*Icons*/
import qr from '../../public/assets/benefit/qr.svg'
import calendar from '../../public/assets/benefit/calendar.svg'


/*UI Component*/
import DescountAndRefoundCard from "../components/ui/DescountAndRefoundCard";
import DescountAndRefoundConditions from "../components/ui/DescountAndRefoundConditions";
import Button from "../components/ui/Button";


const CONDITIONS_REFOUND = [
    {
        title: "Medio de pago",
        subtitle: "Usando el QR con tu saldo de Pigmeo.",
        icon: qr
    },
    {
        title: "Vigencia",
        subtitle: "Desde el 14 de Mayo del 2023 hasta el 01 de Enero del 2024.",
        icon: calendar
    }
]

const RefoundPage = () => {
    const { id } = useParams();
    const [refound, setRefound] = useState<Beneficios | undefined>()


    useEffect(() => {
        const data = reintegrosJSON.filter(refound => refound.id === id);
        setRefound(data[0])
    }, [])

    return (
        <section className="select-none w-full pb-20 flex flex-col gap-4  ">

            <HeaderBack title="Reintegros" />

            <div className='px-4 py-6 flex flex-col items-center gap-8  md:flex-row md:justify-center md:h-[70vh] '>
                <DescountAndRefoundCard benefit={refound} />
                <DescountAndRefoundConditions conditions={CONDITIONS_REFOUND} />
            </div>

            <div className=" flex justify-center pb-10">
                <Button type="button" >
                    Activar
                </Button>
            </div>
        </section >
    )
}

export default RefoundPage