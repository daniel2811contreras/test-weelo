import { CriptoContext } from "@src/contexts/cripto";
import Filter from "@src/utils/components/Filter";
import ListCoins from "@views/CryptoCurrency/components/ListCoins";
import { useContext, useEffect } from "react";

const CryptoCurrency = () => {
  //* context
  const { isDark } = useContext(CriptoContext);

  useEffect(() => {
    if (isDark) window.location.reload();
  }, [isDark]);
  return (
    <div>
      <Filter />
      <ListCoins />
    </div>
  );
};

export default CryptoCurrency;
