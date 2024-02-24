
interface ButtonProps {
    children: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}



const Button = ({ children, type, onClick }: ButtonProps) => {
    return (
        <button className="
        w-[20.5rem] h-[3rem] 
        md:w-[42rem]
        rounded-[0.75rem]
        text-base font-semibold
        text-slate-100
        bg-[rgba(59,27,128,1)]
        cursor-pointer
        "
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button