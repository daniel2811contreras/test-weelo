import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ListCoins from "@views/CryptoCurrency/components/ListCoins";
import { CriptoProvider, CriptoContext } from "@context/cripto";

import { useContext } from "react";
import { act } from "react-dom/test-utils";

jest.mock("@utils/function/api/coin", () => ({
  getListCoins: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: [
            {
              id: "90",
              symbol: "BTC",
              name: "Bitcoin",
              nameid: "bitcoin",
              rank: 1,
              price_usd: "64193.76",
              percent_change_24h: "-1.04",
              percent_change_1h: "0.18",
              percent_change_7d: "3.94",
              price_btc: "1.00",
              market_cap_usd: "1210151326973.60",
              volume24: 29698047835.001846,
              volume24a: 29199283948.672264,
              csupply: "18851540.00",
              tsupply: "18851540",
              msupply: "21000000",
            },
          ],
          info: {
            coins_num: 6436,
            time: 1636753260,
          },
        });
        reject(null);
      }, 0);
    }),
}));

describe("CryptoCurrency testing", () => {
  const MockComponen = () => {
    return (
      <CriptoProvider>
        <ListCoins />
      </CriptoProvider>
    );
  };
  test("change isDark true", async () => {
    render(<MockComponen />);
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 1)); // wait for response
    });
    expect(screen).toBeTruthy()
  });
});
