import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imgUrl
                ? "https://i.ytimg.com/vi/nXUNa2yQZE8/maxresdefault.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title ? title.slice(0, 45) : "No Title"}...
            </h5>
            <p className="card-text">
              {desc ? desc.slice(0, 90) : "No Description"}...
            </p>
            <a
              rel="noreferrer"
              target="_blank"
              href={newsUrl}
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
