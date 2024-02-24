import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


/*JSON*/
import descuentosJSON from '../data/mejoresDescuentos.json';

/*Interfaces*/
import { Beneficios } from "./BenefitsPage";

/*Icons*/
import qr from '../../public/assets/benefit/qr.svg'
import calendar from '../../public/assets/benefit/calendar.svg'
import location from '../../public/assets/benefit/location.svg'

/*UI-Components*/
import HeaderBack from "../components/ui/HeaderBack";
import DescountAndRefoundCard from "../components/ui/DescountAndRefoundCard";
import DescountAndRefoundConditions from "../components/ui/DescountAndRefoundConditions";




const CONDITIONS_DESCUENTOS = [
    {
        title: "Medio de pago",
        subtitle: "Usando el QR con tu saldo de Pigmeo.",
        icon: qr
    },
    {
        title: "Vigencia",
        subtitle: "Desde el 14 de Mayo del 2023 hasta el 01 de Enero del 2024.",
        icon: calendar
    },
    {
        title: "Sucursales",
        subtitle: "Palermo y Recoleta.",
        icon: location
    },
]


export default function DescountPage() {

    const { id } = useParams();
    const [descuento, setDescuento] = useState<Beneficios>()


    useEffect(() => {
        const data = descuentosJSON.filter(desc => desc.id === id);
        setDescuento(data[0])
    }, [])


    return (
        <section className="select-none w-full pb-20 flex flex-col gap-4 ">

            <HeaderBack title="Descuento" />

            <div className='px-4 py-6 flex flex-col items-center gap-8  md:flex-row md:justify-center md:h-[70vh] '>
                <DescountAndRefoundCard benefit={descuento} />
                <DescountAndRefoundConditions conditions={CONDITIONS_DESCUENTOS} />
            </div>

        </section >
    )
}
