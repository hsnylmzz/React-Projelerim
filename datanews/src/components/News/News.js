import React, { Component } from 'react';
import "./News.css";

export default class News extends Component {
    state = {
        showDetail : false
    };
    handleInfo = () =>
    {
        this.setState({
            showDetail : !this.state.showDetail
        });
    }
  render() 
  {
    const {id,title,img,detail} = this.props.news;
    const {removeDetail} = this.props;
    return (
        <article className="news">
            <div className="img-container">
                <img src={img} alt=""/>
                <span className="close-btn" onClick={() => removeDetail(id)}>
                    <i className="fa-solid fa-square-xmark"/>
                </span>
            </div>
            <div className="news-info">
                <h3>{title}</h3>
                <h5>
                    info
                    <span onClick={this.handleInfo}>
                        <i className="fa-solid fa-square-caret-down"></i>
                    </span>
                </h5>
                {this.state.showDetail && <p>{detail}</p>}
            </div>
        </article>
    )
  }
}
