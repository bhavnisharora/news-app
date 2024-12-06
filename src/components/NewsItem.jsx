import React from "react";

const fallbackImage = "/not-availabel.jpg";

const NewsItem = ({ title, desc, src, url }) => {
  const truncateText = (text, limit) => {
    return text && text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  return (
    <div
      className="card bg-dark text-light mx-3 my-3"
      style={{ width: "18rem" }}
    >
      <img
        src={src || fallbackImage}
        className="card-img-top"
        alt="News Thumbnail"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{truncateText(title, 30)}</h5>
        <p className="card-text">{truncateText(desc, 90)}</p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
