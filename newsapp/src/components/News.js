import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      totalCount: 0,
      page: 1,
    };
  }

  async componentDidMount() {
    let urlNews =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=236a737ec85047b099b2d4430b858b51&page=1&pageSize=20";
    let data = await fetch(urlNews);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalCount: parsedData.totalResults,
    });
  }

  handlePreviousClick = async () => {
    let urlNews = `https://newsapi.org/v2/top-headlines?country=in&apiKey=236a737ec85047b099b2d4430b858b51&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(urlNews);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };

  handleNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalCount / 20)) {
      let urlNews = `https://newsapi.org/v2/top-headlines?country=in&apiKey=236a737ec85047b099b2d4430b858b51&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(urlNews);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3 my-3" key={element.url}>
                <NewsItem
                  title={element.title}
                  desc={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-sm btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalCount / 20)
            }
            className="btn btn-sm btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
