import { useState } from "react";
import notifications from '/assets/icons/notificaciones.svg'
import eye from '/assets/icons/eye.svg'
import eyeslash from '/assets/icons/eye-slash.svg'

export default function HeaderHome(): JSX.Element {
    const [showBalance, setShowBalance] = useState(true);

    const handleClickShowBalance = () => setShowBalance((show) => !show);

    return (
        <header className="min-w-[20.5rem]  md:w-full h-[11.75rem] bg-gradient-to-r from-[#661EC2] from-0% to-[#240860] to-100% rounded-none p-3">

            <section className="flex justify-between">
                <div className="w-9 h-8 flex justify-center items-center text-lg font-medium bg-white rounded-lg ">
                    IS
                </div>
                <img className="w-9 h-8 text-white" src={notifications} width={36} height={32} />
            </section>

            <section className="flex flex-col items-center gap-4 text-white">
                <div className="flex justify-center items-center gap-2">
                    <p className="text-lg">Total disponible</p>
                    <p className="px-2 py-[4px] bg-white rounded-2xl text-slate-800">MI CVU</p>
                </div>
                <div className="flex text-white">
                    <span className="text-2xl">{showBalance ? `$ 10000` : "*********"}</span>
                    <img className=" w-9 h-8 " width={36} height={32} src={`${showBalance ? eye : eyeslash}`} onClick={handleClickShowBalance} />
                </div>
            </section>
        </header>
    );
}
