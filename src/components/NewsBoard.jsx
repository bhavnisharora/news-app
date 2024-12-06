import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <p className="display-4 my-4 text-center ">
        News <span className="bg-danger badge">Latest</span>
      </p>
      <div className="d-flex flex-row justify-content-center flex-wrap align-item-center ">
        {articles?.map((elem, i) => {
          return (
            <NewsItem
              key={i}
              title={elem.title}
              desc={elem.description}
              src={elem.urlToImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsBoard;
