import "./coin.css";

const Coin = ({ coin }) => {
  return (
    <article className="coin">
      <p>{coin.rank}</p>
      <div>
        <img src={coin.icon} alt="" />
        <h2>{coin.symbol}</h2>
      </div>
      <p>${coin.price.toLocaleString()}</p>
      <p>{coin.priceChange1d}</p>
      <p className="show-desktop">${coin.volume.toLocaleString()}</p>
      <p className="show-desktop">${coin.marketCap.toLocaleString()}</p>
    </article>
  );
};

export default Coin;