

/*Images*/
import userIcon from '/assets/icons/navbar/userIcon.svg';
import trendingIcon from '/assets/icons/navbar/trendingIcon.svg';
import receiptIcon from '/assets/icons/navbar/receiptIcon.svg';
import homeIcon from '/assets/icons/navbar/homeIcon.svg';
import qr from '/assets/icons/navbar/qr.svg';
import { Link } from 'react-router-dom';


export default function NavBar(): JSX.Element {

    return (
        <section className=" w-full h-[4.375rem] flex justify-center fixed bottom-0  bg-white  border-t z-50 shadow-lg shadow-violet-600">
            <div className='w-[22rem] flex  justify-evenly items-center gap-2 '>
                <Link to={'/home'} className='flex flex-col justify-center items-center'>
                    <img src={homeIcon} className="w-10 h-10 cursor-pointer" />
                    <p className='text-xs font-medium text-center'>Inicio</p>
                </Link>
                <Link to={'/finanzas'} className='flex flex-col justify-center items-center'>
                    <img src={trendingIcon} className="w-10 h-10 cursor-pointer" />
                    <p className='text-xs font-medium text-center'>Finanzas</p>
                </Link>
                <Link to={'/scanner'} className='w-[4.25rem] h-[4.25rem] flex justify-center items-center rounded-full relative -top-5  bg-violet-900  cursor-pointer'>
                    <img src={qr} className="w-10 h-10" />
                </Link>
                <Link to={'/beneficios'} className='flex flex-col justify-center items-center'>
                    <img src={receiptIcon} className="w-10 h-10 cursor-pointer" />
                    <p className='text-xs font-medium text-center'>Beneficios</p>
                </Link>
                <Link to={'/perfil'} className='flex flex-col justify-center items-center'>
                    <img src={userIcon} className="w-10 h-10 cursor-pointer" />
                    <p className='text-xs font-medium text-center'>Perfil</p>
                </Link>
            </div>
        </section>
    )
}