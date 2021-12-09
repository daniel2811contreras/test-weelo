/* eslint-disable react-hooks/exhaustive-deps */
import { CriptoContext } from "@src/contexts/cripto";
import { IListCoin } from "@src/contexts/cripto/interface";
import Loader from "@src/utils/components/Loader";
import { getListCoins } from "@src/utils/function/api/coin";
import { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ItemCoin from "../ItemCoin";
import { ListCoinsStyle } from "./style";
const ListCoins = () => {
  const { listCoins, setListCoins } = useContext(CriptoContext);
  //*   state
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [startNum, setStartNum] = useState<number>(0);
  const [coinsNum, setCoinsNum] = useState<number>(0);

  //* function
  const loadMore = () => {
    getListCoins(startNum, 100).then((res) => {
      listCoins
        ? setListCoins([...listCoins, ...res.data])
        : setListCoins(res.data);
      setStartNum(startNum + 100);
      setCoinsNum(res.info?.coins_num);
    });
  };

  useEffect(() => {
    if (startNum !== 0) setHasMore(startNum < coinsNum);
  }, [startNum, coinsNum]);

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <>
      <div className={ListCoinsStyle}>
        {listCoins && (
          <InfiniteScroll
            className="contCoins"
            dataLength={listCoins.length}
            hasMore={hasMore}
            next={loadMore}
            loader={<Loader />}
          >
            {listCoins.map((itemCoins: IListCoin, i: number) => (
              <ItemCoin itemCoins={itemCoins} key={i} />
            ))}
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};

export default ListCoins;
