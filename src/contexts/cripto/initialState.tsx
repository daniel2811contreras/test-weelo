import { ICriptoContext } from "@src/contexts/cripto/interface";

export const defaultState: ICriptoContext = {
  listCoins: null,
  setListCoins: () => {},
  isDark: false,
  setIsDark: () => {}
};
