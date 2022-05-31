import React, { Component } from 'react'
import NewsItem from '../NewsItem'
import Spinner from './Spinner';
export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=6d3594a536674c73a5d552b26e184de6&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            page: 1,
            loading: false
        })
    }

    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=6d3594a536674c73a5d552b26e184de6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
    }

    handleNextClick = async () => {
        // if (!(this.state.page + 1) > Math.ceil(this.state.totalResults / this.props.pageSize)) {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=6d3594a536674c73a5d552b26e184de6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
        })
        // }
    }

    render() {
        return (
            <div className='container my-5'>
                <h2 className='text-center'>NewsBuddy -Top headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 20) + "..." : ""} discription={element.description ? element.description.slice(0, 88) + "..." : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://media.istockphoto.com/photos/astronaut-lying-in-the-meadow-picture-id1304263738?s=612x612"} newsUrl={element.url ? element.url : ""}></NewsItem>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}>Previous</button>
                    <button type="button" disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        )
    }
}
