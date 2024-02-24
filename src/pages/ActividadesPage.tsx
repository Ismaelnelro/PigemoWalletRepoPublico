
/*JSON*/
import actividadesJSON from '../data/actividades.json';

/*UI- Component */
import HeaderBack from '../components/ui/HeaderBack'
import { useEffect, useState } from 'react';
import ActivitiesAndFinancesLayout from './layout/ActivitiesAndFinancesLayout';

interface Transaccion {
    imagen: string;
    nombre: string;
    fechaActividad: string;
    hora: string;
    monto: string;
    tipoTransaccion: string;
}


const ActividadesPage = () => {

    const [actividades, setActividades] = useState<Transaccion[]>()

    useEffect(() => {
        setActividades(actividadesJSON)

    }, [])


    return (
        <section className="select-none w-full pb-20 relative ">

            <HeaderBack title="Actividades" />

            <ActivitiesAndFinancesLayout title={"Saldo Pigmeo disponible"} saldo={"10000"}>


                {actividades && actividades.map((actividad, i) => (
                    <li key={`${actividad.nombre}-${i}`} className="grid grid-cols-9  items-end gap-4 px-1 py-4 cursor-pointer ">
                        <img className="w-6 h-6 col-span-1" src={actividad.imagen} />

                        <div className=" col-span-6">

                            {(actividad.tipoTransaccion === "envio") && <p className=" text-sm font-semibold">Envio a {actividad.nombre}</p>}
                            {(actividad.tipoTransaccion === "transferencia") && <p className=" text-sm font-semibold">Transferencia de {actividad.nombre}</p>}
                            {(actividad.tipoTransaccion === "debito") && <p className=" text-sm font-semibold">{actividad.nombre}</p>}

                            <span className='flex gap-3 font-light text-xs'>
                                <p className="">{actividad.fechaActividad}</p>
                                <p className="">{actividad.hora}hrs.</p>
                            </span>
                        </div>

                        <div className="text-right font-semibold col-span-1">
                            {(actividad.tipoTransaccion === "transferencia") && <p className=" text-green-500">+${actividad.monto}</p>}
                            {(actividad.tipoTransaccion === "debito") && <p>-${actividad.monto}</p>}
                            {(actividad.tipoTransaccion === "envio") && <p>-${actividad.monto}</p>}
                        </div>

                    </li>
                ))}
            </ActivitiesAndFinancesLayout>

        </section >
    )
}

export default ActividadesPage
