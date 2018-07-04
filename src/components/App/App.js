import React, { Component } from 'react';
// import fetchNews from '../../utils/api';
// import { articles, normalizedComments, normalizedArticles } from '../../data/data';
import ArticleList from '../../components/ArticleList/ArticleList';
import UserForm from '../../components/UserForm/UserForm';
import DateRange from '../../components/DateRange/DateRange';
import Counter from '../Counter/Counter';
import SelectFilter from '../SelectFilter/SelectFilter'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
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
			<Router>
				<div className="App">
					<div>
						<h2>Main menu</h2>
						<div><NavLink activeStyle={{color: 'red'}} to="/counter">Counter</NavLink></div>
						<div><NavLink activeStyle={{color: 'red'}} to="/filters">Filters</NavLink></div>
						<div><NavLink activeStyle={{color: 'red'}} to="/articles">Articles</NavLink></div>
					</div>
					<UserForm />
					<Route path = "/counter" component = {Counter} />
					<Route path = "/filters" component = {SelectFilter} />
					<Route path = "/articles" component = {ArticleList} />
					{/* <Counter />
					<DateRange />
					<SelectFilter /> */}
					
					{/* <ArticleList /> */}
				</div>
			</Router>
		);
	}

	

}

export default App;
