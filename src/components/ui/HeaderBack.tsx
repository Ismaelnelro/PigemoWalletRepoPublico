import { useNavigate } from "react-router-dom";

/*Icon*/
import arrowleft from '/assets/icons/arrowleft.svg';

const HeaderBack = ({ title }: { title: string }): JSX.Element => {

    const navigate = useNavigate();

    return (
        <div className=" flex justify-start items-center gap-4 p-6 bg-violet-800" onClick={() => navigate(-1)}>
            <img className="w-4 h-4 " src={arrowleft} alt="arrow left" width={16} height={16} />
            <p className="text-xl text-slate-100">{title}</p>
        </div>
    )
}

export default HeaderBack