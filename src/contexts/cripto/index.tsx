import { createContext, useState } from "react";
import { defaultState } from "@src/contexts/cripto/initialState";
import {
  ICriptoContext,
  ICriptoProvider,
  IListCoin,
} from "@src/contexts/cripto/interface";

const CriptoContext = createContext<ICriptoContext>(defaultState);
const { Consumer, Provider } = CriptoContext;

const CriptoProvider = ({ children }: ICriptoProvider) => {
  const [listCoins, setListCoins] = useState<IListCoin[] | null>(
    defaultState.listCoins
  );
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <Provider
      value={{
        listCoins,
        setListCoins,
        isDark, setIsDark
      }}
    >
      {children}
    </Provider>
  );
};

export { CriptoProvider, Consumer as CriptoConsumer, CriptoContext };
