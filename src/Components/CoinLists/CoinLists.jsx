import axios from "axios";
import "./coinLists.css";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Coin from "../Coin/Coin";

const CoinLists = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getCoins = async () => {
    try {
      const response = await axios.get("https://api.coinstats.app/public/v1/coins?skip=0");
      const data = await response?.data?.coins;
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };


  const { data: coins, isLoading, isError, error } = useQuery(["coins"], getCoins);

  useEffect(() => {
    getCoins();
  }, []);

  const searchedCoins = coins && coins.filter(coin => {
    return coin.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const displayCoins = () => {
    if (searchQuery === "") {
      return (
        coins && coins.map(coin => (
          <Coin key={coin.id} coin={coin} />
        ))
      );
    }

    if (searchedCoins.length > 0) {
      return (
        searchedCoins && searchedCoins.map(coin => (
          <Coin key={coin.id} coin={coin} />
        ))
      );
    }
    if (searchedCoins.length <= 0) {
      return (
        <h1>No matching coins found</h1>
      );
    }
  };

  if (isLoading) {
    return (
      <h1 className="container" style={{
        color: "white",
        fontSize: "1rem",
        paddingBlock: "1rem",
        border: "1px solid black",
        paddingInline: "1rem"
      }}>Loading...</h1>
    );
  }
  if (isError) {
    return (
      <h1 className="container" style={{
        color: "white",
        fontSize: "1rem",
        paddingBlock: "1rem",
        border: "1px solid black",
        paddingInline: "1rem"
      }}>Error fetching coins {error}...</h1>
    );
  }

  return (
    <main>
      <div className="container coins__container">
        <input placeholder="Search coins by name" className="search" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <div className="coinLists-header">
          <p>#</p>
          <p>Coin</p>
          <p>24hr</p>
          <p>Volume</p>
          <p>Market Cap</p>
        </div>
        {
          displayCoins()
        }
      </div>
    </main>
  );
};
export default CoinLists;