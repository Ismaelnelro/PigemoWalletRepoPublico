import { ReactNode } from 'react'


interface LayoutProps {
    children: ReactNode;
    title: string;
    saldo?: string;
}

const ActivitiesAndFinancesLayout = ({ children, title, saldo }: LayoutProps) => {
    return (
        <>
            <article className="w-full h-[6.625rem] text-center   bg-violet-800 text-white border-none ">
                <p className=" text-lg">{title}</p>
                {saldo && <p className="text-2xl font-bold ">${saldo}</p>}
            </article>

            <article className='w-full absolute top-[9rem] left-1/2 -translate-x-1/2 bg-transparent pb-[7rem]'>

                <div className=" w-[22.5rem] border rounded px-3 m-auto  shadow-xl shadow-slate-500 bg-white md:w-[90%] ">
                    <ul className="flex flex-col  [&>li:not(:last-child)]:border-b-2">

                        {children}

                    </ul>
                </div>
            </article>
        </>
    )
}

export default ActivitiesAndFinancesLayout