import { IListCoin } from '@src/contexts/cripto/interface';
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react";
import ItemCoin from '@views/CryptoCurrency/components/ItemCoin';

describe('ItemCoin', () => {
    const itemCoins:IListCoin = {
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
      }
    test('render ItemCoin', () => {
        render(<ItemCoin itemCoins={itemCoins} />)
        const iconCoin = screen.getByTestId('iconCoin')
        fireEvent.click(iconCoin)
        expect(iconCoin).toBeTruthy()
    })

})

