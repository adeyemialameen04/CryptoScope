import axios from "axios";
import "./coinLists.css";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const CoinLists = () => {

  const getCoins = async () => {
    try {
      const response = await axios.get("https://api.coinstats.app/public/v1/coins?skip=0");
      const data = await response.data.coins;
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const { data } = useQuery(["coins"], getCoins);

  return (
    <div>CoinLists</div>
  );
};

export default CoinLists;