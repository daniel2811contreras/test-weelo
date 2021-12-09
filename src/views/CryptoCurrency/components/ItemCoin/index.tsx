import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useAnimate } from "react-simple-animate";
import { IItemCoin } from "./interface";

const ItemCoin = ({ itemCoins }: IItemCoin) => {
  //* animate
  const {
    play: playBox,
    style: styleBox,
    isPlaying,
  } = useAnimate({
    start: {
      padding: "0px",
      marginBottom: "0px",
      visibility: "hidden",
      height: "0px",
    },
    end: {
      padding: "10px 35px",
      marginBottom: "10px",
      visibility: "visible",
      height: "auto",
    },
    duration: 0.5,
  });
  const { play: playFont, style: styleFont } = useAnimate({
    start: {
      fontSize: "0px",
    },
    end: {
      fontSize: "15px",
    },
    duration: 0.2,
  });

  //*   function
  const Play = () => {
    playBox(!isPlaying);
    playFont(!isPlaying);
  };

  return (
    <>
      <div className="itemCoin">
        <div className="infoCoin">
          <div className="nameCoin">{itemCoins.name}</div>
          <div className="priceCoin">$ {itemCoins.price_usd} usd</div>
        </div>
        <FontAwesomeIcon
          data-testid="iconCoin"
          className="iconCoin"
          icon={isPlaying ? faEyeSlash : faEye }
          onClick={() => Play()}
        />
      </div>
      <div className="moreInfoCoin" style={styleBox}>
        {itemCoins.symbol && (
          <div className="itemInfoCoin" style={styleFont} >
            symbol: <span>{itemCoins.symbol}</span>
          </div>
        )}
        {itemCoins.nameid && (
          <div className="itemInfoCoin" style={styleFont} >
            name id: <span>{itemCoins.nameid}</span>
          </div>
        )}
        {itemCoins.rank && (
          <div className="itemInfoCoin" style={styleFont} >
            rank: <span>{itemCoins.rank}</span>
          </div>
        )}
        {itemCoins.percent_change_1h && (
          <div className="itemInfoCoin" style={styleFont} >
            percent change 1h: <span>{itemCoins.percent_change_1h}</span>
          </div>
        )}
        {itemCoins.percent_change_24h && (
          <div className="itemInfoCoin" style={styleFont} >
            percent change 24h: <span>{itemCoins.percent_change_24h}</span>
          </div>
        )}
        {itemCoins.percent_change_7d && (
          <div className="itemInfoCoin" style={styleFont} >
            percent change 7d: <span>{itemCoins.percent_change_7d}</span>
          </div>
        )}
        {itemCoins.market_cap_usd && (
          <div className="itemInfoCoin" style={styleFont} >
            market cap usd: <span>{itemCoins.market_cap_usd}</span>
          </div>
        )}
        {itemCoins.price_btc && (
          <div className="itemInfoCoin" style={styleFont} >
            price btc: <span>{itemCoins.price_btc}</span>
          </div>
        )}
        {itemCoins.volume24 && (
          <div className="itemInfoCoin" style={styleFont} >
            volume 24: <span>{itemCoins.volume24}</span>
          </div>
        )}
        {itemCoins.volume24a && (
          <div className="itemInfoCoin" style={styleFont} >
            volume 24 native: <span>{itemCoins.volume24a}</span>
          </div>
        )}
        {itemCoins.csupply && (
          <div className="itemInfoCoin" style={styleFont} >
            csupply: <span>{itemCoins.csupply}</span>
          </div>
        )}
        {itemCoins.tsupply && (
          <div className="itemInfoCoin" style={styleFont} >
            tsupply: <span>{itemCoins.tsupply}</span>
          </div>
        )}
        {itemCoins.msupply && (
          <div className="itemInfoCoin" style={styleFont} >
            msupply: <span>{itemCoins.msupply}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemCoin;
