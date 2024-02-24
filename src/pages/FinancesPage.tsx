import { useEffect, useState } from "react";

/*UI- Component */
import HeaderBack from "../components/ui/HeaderBack";
import ActivitiesAndFinancesLayout from "./layout/ActivitiesAndFinancesLayout";


interface CryptoCurrency {
  changePercent24Hr: string;
  explorer: string;
  id: string;
  marketCapUsd: string;
  maxSupply: string;
  name: string;
  priceUsd: string;
  rank: string;
  supply: string;
  symbol: string;
  volumeUsd24Hr: string;
  vwap24Hr: string;
}


function FinancesPage(): JSX.Element {
  const [criptomonedas, setCriptomonedas] = useState<CryptoCurrency[]>();

  useEffect(() => {

    const fetchCripto = async () => {
      try {
        const response = await fetch('https://api.coincap.io/v2/assets?limit=5');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const { data } = await response.json();
        setCriptomonedas(data);
      } catch (error) {
        console.error('Error en la solicitud fetch:', error);
      }
    };

    fetchCripto();

  }, [])


  return (
    <section className="select-none w-full pb-20 relative ">

      <HeaderBack title="Actividades" />

      <ActivitiesAndFinancesLayout title={"Mercado Crypto"} saldo={"10000"}>

        {criptomonedas && criptomonedas.map((cripto, i) => (
          <li key={`${cripto.name}-${i}`} className="flex flex-wrap gap-4 items-centergap-4 px-1 py-4 cursor-pointer ">
            <img className="w-10 h-10 " src={`https://coinicons-api.vercel.app/api/icon/${cripto.symbol?.toLowerCase()}`} />
            <div className="flex-grow">
              <h5 className="font-bold">{cripto.name}</h5>
              <h6 className="font-light text-gray-400">{cripto.symbol}</h6>
            </div>
            <div className="text-right">
              <p className="text-sm"> {Number(cripto.priceUsd).toFixed(3)} &nbsp;&nbsp;USD </p>
              <span className="text-sm text-green-500">-4,41%</span>
            </div>
          </li>
        ))}

      </ActivitiesAndFinancesLayout>


    </section >
  );
}


export default FinancesPage;
