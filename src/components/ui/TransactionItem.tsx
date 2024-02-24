


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


type TransactionProps = {
    item: ITransactions;
    inHome?: boolean;
    index: number;
    place: string;
};

import avatarSender from '/assets/icons/avatarSender.svg'
import avatarReceiver from '/assets/icons/avatarreceiver.svg'

const TransactionItem = ({ item, inHome, index, place }: TransactionProps) => {
    const { receiver, createdAt, amount, transaction_type, sender } = item;
    const date = new Date(createdAt);

    return (
        <li key={`${place}-item-${index}`} className=" p-4 flex justify-center items-center ">
            <img src={transaction_type === "debit" ? avatarSender : avatarReceiver} className="w-[2rem] aspect-square bg-slate-50 my-1 mr-3 rounded-md" />
            <div className="mr-auto flex flex-col gap-1">
                <p className=" text-black font-bold text-xs ">
                    {(transaction_type === "credit") && `Transferencia de ${sender.firstName} ${sender.lastname}`}
                    {(transaction_type === "deposit") && `Ingresaste dinero`}
                    {(transaction_type === "debit") && `Envío a ${receiver.firstName} ${receiver.lastname}`}
                </p>
                {!inHome && (
                    <p className=" text-gray-500">
                        {date.toLocaleDateString("default", {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                        })}
                        hs
                    </p>
                )}
            </div>
            {(transaction_type === "credit") && <p className=" text-green-500 font-semibold">+${amount}</p>}
            {(transaction_type === "deposit") && <p className=" text-green-500 font-semibold">+${amount}</p>}
            {(transaction_type === "debit") && <p className=" text-black font-semibold">-${amount}</p>}
        </li>
    )
}

export default TransactionItem