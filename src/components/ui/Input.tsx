

interface InputProps {
    placeholder: string;
    id: string;
    name: string;
    type: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    value: string;
    touched: boolean | undefined;
    error: string | undefined;

}


const Input = ({ placeholder, id, name, type, onChange, onBlur, value, touched, error }: InputProps) => {
    console.log("Hola");
    
    return (
        <>
            <input
                className="w-[20.5rem] h-[3rem] p-2 rounded-lg  text-slate-950 border border-slate-900 "
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
            <div className={`h-6 ${touched && error ? "opacity-100 text-red-500 text-xs p-1" : "opacity-0"}`}>{error}</div>
        </>
    )
}

export default Input