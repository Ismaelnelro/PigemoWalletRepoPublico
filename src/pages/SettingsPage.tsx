import { Link, useNavigate } from "react-router-dom";


/*JSON*/
import userData from '../data/profile.json';


/*Icons*/
import arrowleft from '/assets/icons/arrowleft.svg';
import plus from '/assets/icons/plus.svg';



interface ListItemType {
    title: string;
    subtitle: string;
    href?: string;
}

const MENU_ITEMS: ListItemType[] = [
    {
        title: "Nombre completo",
        subtitle: `${userData[0].firstname + " " + userData[0].lastname}`,
    },
    {
        title: "Email",
        subtitle: `${userData[0].email}`,
    },
    {
        title: "Fecha de nacimiento",
        subtitle: `${userData[0].birthdate}`,
    },
    {
        title: "Dni",
        subtitle: `${userData[0].dni}`,
    },
    {
        title: "Dirección",
        subtitle: `${userData[0].address}`,
        href: `/editProfile?field=${(userData[0].firstname, userData[0].lastname)}`,
    },
    {
        title: "Teléfono",
        subtitle: `${userData[0].phone}`,
        href: `/editProfile?field=${(userData[0].firstname, userData[0].lastname)}`,
    },
    {
        title: "Cbu",
        subtitle: `${userData[0].CBU}`,
    },
];
function SettingsPage(): JSX.Element {
    const navigate = useNavigate();

    return (
        <section className="select-none w-full ">
            <div className="h-24 bg-violet-800 flex justify-start items-start gap-4" onClick={() => navigate(-1)}>
                <img className="w-4 h-4 relative top-5 left-7" src={arrowleft} alt="arrow left" width={16} height={16} />
                <p className="relative top-4 left-7 text-xl text-slate-100">Datos personales</p>
            </div>
            <div className=" flex flex-col justify-center items-center bg-white relative h-full pb-20">

                <div className="w-24 h-24 rounded-full object-cover absolute -top-10 md:right-4 border-2 border-black border-dotted bg-[#F9C55F] flex justify-center items-center">
                    <p className="text-xl opacity-45"> {(userData[0].firstname).slice(0, 1)} {(userData[0].lastname).slice(0, 1)}</p>
                </div>
                <button className="flex  justify-center items-center gap-2 absolute top-4 right-6 md:top-16 text-xs text-slate-800" >
                    <img src={plus} width={24} height={24} alt="plus icon to add new image" className="w-4 h-4" />
                    Agregar  Imagen
                </button>


                <ul className="flex flex-col gap-0 px-4 w-full min-h-[28rem] md:min-h-[30.5rem] [&>li:not(:last-child)]:border-b-2 pt-20">
                    {MENU_ITEMS.map((item, i) => (
                        <li key={i} className="flex gap-8 items-center min-h-[4.5rem] px-4 py-6">
                            <p className="text-blakc  text-md flex-grow">{item.title}</p>
                            <p className="text-xs text-[#505152] mt-1">{item.subtitle}</p>
                            {item.href && (
                                <Link to={item.href} className="text-xs font-medium underline mr-2  cursor-pointer">
                                    Editar
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default SettingsPage;
