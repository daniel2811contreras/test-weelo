export interface ICriptoContext {
  listCoins: IListCoin[] | null;
  setListCoins: Function;
  isDark: boolean;
  setIsDark: Function;
}

export interface ICriptoProvider {
  children: any;
}

export interface IListCoin {
  id: string | null;
  symbol?: string | null;
  name?: string | null;
  nameid?: string | null;
  rank?: number | null;
  price_usd?: string | null;
  percent_change_24h?: string | null;
  percent_change_1h?: string | null;
  percent_change_7d?: string | null;
  price_btc?: string | null;
  market_cap_usd?: string | null;
  volume24?: number | null;
  volume24a?: number | null;
  csupply?: string | null;
  tsupply?: string | null;
  msupply?: string | null;
}

export interface IMarketCoin {
  name: string;
  base: string;
  quote: string;
  price: number;
  price_usd: number;
  volume: number;
  volume_usd: number;
  time: number;
}
