import React, { Component } from 'react';
// import fetchNews from '../../utils/api';
import { normalizedComments, normalizedArticles } from '../../data/data';
import ArticleList from '../../components/ArticleList/ArticleList';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state  = {
      articles: normalizedArticles
    }
  }
  componentDidMount() {
    // fetchNews().then(response => {
    //   if (response.status === 'ok') {
    //     console.log(response);
    //     this.setState(() => {
    //       return {
    //         articles: response.articles
    //       }
    //     })
    //   }
    // });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News</h1>
        </header>

        {
        this.state.articles.length > 0 &&
          <ArticleList articles={this.state.articles} />
        }
        
      </div>
    );
  }
}

export default App;
