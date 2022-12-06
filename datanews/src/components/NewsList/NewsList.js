import React, { Component } from 'react';
import News from '../News/News';
import {newsData} from "../../NewsData";
import "./NewsList.css";
export default class NewsList extends Component {
    state = {
        news : newsData
    };
    removeNews = id =>
    {
        const{news}=this.state;
        const sortedNews = news.filter(news => news.id !== id);
        this.setState({
            tours:sortedNews
        });
    }
  render() {
    const {news} = this.state;
    return (
        <section className="newslist">
            {
                news.map(news => (
                    <News key={news.id} news={news} removeNews={this.removeNews}/>
                ))
            }
        </section>
    )
  }
}