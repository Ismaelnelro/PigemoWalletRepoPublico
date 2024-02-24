import { Link } from 'react-router-dom';

interface IAnchor {
    to: string
    children: string
}



const Anchor = ({ to, children }: IAnchor) => {
    return (
        <Link to={to}
            className=' w-[20.5rem] h-[3rem]
            flex justify-center items-center
            text-base font-semibold  text-center 
              cursor-default
              '>
            <p className='cursor-pointer w-auto 
              text-slate-900 
            hover:text-[rgba(59,27,128,.8)] '>
                {children}
            </p>
        </Link>
    )
}

export default Anchor;