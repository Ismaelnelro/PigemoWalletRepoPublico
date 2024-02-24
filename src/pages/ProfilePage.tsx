import { useNavigate } from "react-router-dom";


/*JSON*/
import userData from '../data/profile.json';


/*Icons*/
import user from '/assets/icons/userProfile/user.svg';
import email from '/assets/icons/userProfile/email.svg';
import help from '/assets/icons/userProfile/help.svg';
import logout from '/assets/icons/userProfile/logout.svg';
import question from '/assets/icons/userProfile/question.svg';
import next from '/assets/icons/next.svg';
import arrowleft from '/assets/icons/arrowleft.svg';




interface ListItemType {
    title: string;
    href?: string;
    icon: string;
}

const MENU_ITEMS: ListItemType[] = [
    { title: "Mis datos", href: "/settings", icon: user },
    { title: "Invitar amigos", href: "/home", icon: email },
    { title: "Chateá con nosotros", href: "/home", icon: help },
    { title: "Preguntas frecuentes  ", href: "/home", icon: question },
    { title: "Cerrar sesión", href: "/auth/login", icon: logout },
];

function ProfilePage(): JSX.Element  {
    const navigate = useNavigate();

    return (
        <section className="select-none w-full ">
            <div className="h-24 bg-violet-800 flex justify-start items-start gap-4" onClick={() => navigate(-1)}>
                <img className="w-4 h-4 relative top-5 left-7" src={arrowleft} alt="arrow left" width={16} height={16} />
                <p className="relative top-4 left-7 text-xl text-slate-100">Perfil</p>
            </div>
            <div className=" flex flex-col justify-center items-center bg-white relative">
                <img src={userData[0].avatar} className="w-24 h-24 rounded-full object-cover absolute -top-10 md:right-4" />
                <p className="text-black text-lg pt-20 md:self-end md:pr-5 flex gap-2">
                    <span>{userData[0].firstname}</span>
                    <span>{userData[0].lastname}</span>
                </p>

                <ul className="flex flex-col gap-0 px-4 w-full min-h-[28rem] md:min-h-[30.5rem] [&>li:not(:last-child)]:border-b-2">
                    {MENU_ITEMS.map((item, i) => (
                        <li key={i} className="flex gap-8 items-center min-h-[4.5rem] px-4 py-6 cursor-pointer"
                            onClick={() => navigate(`${item.href}`)}
                        >
                            <img src={item.icon} alt="" />
                            <p className="text-blakc  text-md flex-grow">{item.title}</p>
                            <img src={next} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default ProfilePage;
