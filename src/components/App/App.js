import React, { Component } from 'react';
// import fetchNews from '../../utils/api';
import { articles, normalizedComments, normalizedArticles } from '../../data/data';
import ArticleList from '../../components/ArticleList/ArticleList';
import UserForm from '../../components/UserForm/UserForm';
import Select from 'react-select';
import 'react-select/dist/react-select.css'; 
// import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state  = {
			articles: articles,
			selection: null
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
		const options = this.state.articles.map(article => ({
			label: article.title,
			value: article.id
		}));

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">News</h1>
				</header>

				<UserForm />
				<Select options={options} value={this.state.selection} onChange={this.changeSelection} multi={true} />

				{
					this.state.articles.length > 0 &&
					<ArticleList articles={this.state.articles} />
				}
				
			</div>
		);
	}

	changeSelection = selection => {
		this.setState({
			selection
		})
	}

}

export default App;
