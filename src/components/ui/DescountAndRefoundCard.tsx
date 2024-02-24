
/*Interface*/
import { Beneficios } from '../../pages/BenefitsPage'



const DescountAndRefoundCard = ({ benefit }: { benefit: Beneficios | undefined }): JSX.Element => {
    return (
        <article className="w-[22.5rem] h-[7rem] flex flex-col  rounded-xl shadow-md relative bg-violet-100  px-5 ">
            <section className='flex items-center justify-between overflow-hidden'>
                <img src={benefit?.image1} className='text-center w-20 h-20' alt="logo cinemark" width={16} height={16} />
                <img src={benefit?.image2} className='text-center w-20 h-20' alt="logo de pochoclos" width={20} height={20} />
            </section>

            <section className='flex items-center gap-4'>
                <p className='text-xl font-bold text-violet-900'>{benefit?.description}</p>
                <p className='text-base font-medium text-slate-900'>{benefit?.condiciones}</p>
            </section>
        </article>
    )
}

export default DescountAndRefoundCard