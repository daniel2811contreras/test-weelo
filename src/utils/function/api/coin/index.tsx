export const getListCoins = (start:number,limit:number) => {
  const requestOptions: any = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${process.env.REACT_APP_API}tickers/?start=${start}&limit=${limit}`, requestOptions).then((response) =>
    response.json()
  );
};
