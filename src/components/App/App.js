import React, { Component } from 'react';
// import fetchNews from '../../utils/api';
// import { articles, normalizedComments, normalizedArticles } from '../../data/data';
import ArticleList from '../../components/ArticleList/ArticleList';
import UserForm from '../../components/UserForm/UserForm';
import DateRange from '../../components/DateRange/DateRange';
import Counter from '../Counter/Counter';
import SelectFilter from '../SelectFilter/SelectFilter'
// import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state  = {
			// articles: articles,
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
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">News</h1>
				</header>

				<Counter />

				<DateRange />

				<SelectFilter />

				<UserForm />
				
				<ArticleList />
			</div>
		);
	}

	

}

export default App;
