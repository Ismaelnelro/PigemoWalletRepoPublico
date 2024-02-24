import { Link } from "react-router-dom";

/*JSON*/
import transacciones from '../../data/transacciones.json'

/*UI-Component*/
import TransactionItem from "../ui/TransactionItem";
import { useEffect, useState } from "react";



export interface UserAccount {
    firstName: string;
    lastname: string;
}

export interface ITransactions {
    amount: number;
    sender: UserAccount;
    receiver: UserAccount;
    reference: string;
    transaction_type: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    id: number;
}

export default function ActivitiesHome(): JSX.Element {

    const [transactions, setTransactions] = useState<ITransactions[]>();

    useEffect(() => {
        const transactionToShow = transacciones.filter((trans) => trans.id < 5)
        setTransactions(transactionToShow)
    }, [])


    return (
        <section className='pt-4 w-[22rem] m-auto md:w-full md:px-3 '>
            <div className='w-full flex  justify-between items-end'>
                <p className='text-base font-semibold  text-black'>Actividades</p>
                <Link to={"/actividades"}
                    className='text-sm font-medium  text-primary-600'>
                    Ver todos
                </Link>
            </div>
            <p className=" font-normal pt-4">Hoy</p>
            <div className="">
                <ul className="bg-white rounded-md">
                    {
                        transactions && transactions.length ? (
                            transactions.map((item, index) => TransactionItem({ item, inHome: true, index, place: "homePage" }))
                        ) : (
                            <div className="flex h-[50px] ">
                                <p className="m-auto">No tienes ningún movimiento</p>
                            </div>
                        )
                    }
                </ul>
            </div>
        </section>
    );
}
