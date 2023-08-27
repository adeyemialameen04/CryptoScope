import { useQuery } from "@tanstack/react-query";
import "./news.css";
import axios from "axios";
import { useEffect } from "react";
import NewsItem from "../../Components/NewsItem/NewsItem";

const News = () => {

  const getNews = async () => {
    try {
      const currentDate = new Date();
      const toDate = currentDate.getTime(); // Current timestamp in milliseconds
      const fromDate = toDate - 24 * 60 * 60 * 1000; // Subtract 24 hours (86400000 milliseconds)

      const response = await axios.get(`https://api.coinstats.app/public/v1/news?skip=0&limit=20&toDate=${toDate}&fromDate=${fromDate}`);
      return await response?.data?.news;
    } catch (error) {
      console.error(error);
    }
  };

  const { data } = useQuery(["news"], getNews);

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <main>
      <div className="container news__container">
        {
          data && data.map(newsItem => (
            <NewsItem key={newsItem.id} newsItem={newsItem} />
          ))
        }
      </div>
    </main>
  );
};

export default News;