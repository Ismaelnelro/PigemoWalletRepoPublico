
interface conditionProps {
    title: string;
    subtitle: string;
    icon: string;
}

const DescountAndRefoundConditions = ({ conditions }: { conditions: conditionProps[] }) => {
    return (
        <ul className={` [&>li:not(:last-child)]:border-b-2 w-full `} >
            {conditions.map((info, index) => (
                <li className='flex h-20 py-2 gap-4' key={index}>

                    <img src={info.icon} className='text-center w-6 h-6' alt="logo cinemark" width={16} height={16} />

                    <div className='h-20'>
                        < p className='text-base font-medium'> {info.title} </p>
                        <p className='text-[14px] font-normal'> {info.subtitle} </p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default DescountAndRefoundConditions