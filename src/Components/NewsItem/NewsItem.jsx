import "./newsItem.css";

const NewsItem = ({ newsItem }) => {

  const truncateText = (text, maxWords) => {
    if (text.length >= maxWords) {
      return text.slice(0, maxWords) + "" + "...";
    }
    return text;
  };

  const truncatedDescription = truncateText(newsItem.description, 100);

  return (
    <article className="newsItem">
      <div className="img__container">
        <img src={newsItem.imgURL} alt="" />
      </div>
      <div className="newsItem-body">
        <h1>{newsItem.title}</h1>
        <small>
          {
            newsItem.description && truncatedDescription
          }
        </small>
        <a target="_blank" href={newsItem.shareURL ? newsItem.shareURL : newsItem.link}>Continue reading ...</a>
      </div>
    </article>
  );
};

export default NewsItem;