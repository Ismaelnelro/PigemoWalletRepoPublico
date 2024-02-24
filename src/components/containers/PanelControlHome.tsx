import { Link } from "react-router-dom";

import plus from '/assets/icons/plus.svg';
import airplane from '/assets/icons/airplane.svg';
import dolar from '/assets/icons/dolar.svg';
import recharge from '/assets/icons/recharge.svg';

interface ActionItem {
    title: string;
    href: string;
    icon: string;
}

const ACTION_ITEMS: ActionItem[] = [
    { title: "Agregar dinero", href: "/addFunds", icon: plus },
    { title: "Transferir dinero", href: "/newTransfer/receiver", icon: airplane },
    { title: "Ver cotizaciones", href: "/cripto", icon: dolar },
    { title: "Hacer una recarga ", href: "/Recharge", icon: recharge }
]


export default function PanelControlHome(): JSX.Element {
    return (
        <section className='flex justify-center'>
            <div className='absolute top-32 w-[22rem] lg:w-[25rem]  h-28 flex  gap-2 justify-evenly  items-center bg-white rounded-lg shadow-md' >
                {ACTION_ITEMS.map((info, index) => (
                    <Link key={`panel-home-${index}`} to={info.href} className='w-20  h-24 flex flex-col items-center '>
                        <div className=' h-12  w-12  flex  justify-center  text-[#3B1B80] bg-[#F5F2FF] rounded-full '>
                            <img className='w-6' src={info.icon} alt="" />
                        </div>
                        <p className='text-center text-sm text-black mt-2'>{info.title}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
