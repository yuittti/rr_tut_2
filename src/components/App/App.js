import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import fetchNews from '../../utils/api';
// import { articles, normalizedComments, normalizedArticles } from '../../data/data';
import Articles from '../../components/routes/Articles';
import NotFound from '../../components/routes/NotFound';
import CommentsPage from '../../components/routes/CommentsPage';
import UserForm from '../../components/UserForm/UserForm';
import DateRange from '../../components/DateRange/DateRange';
import Counter from '../Counter/Counter';
import SelectFilter from '../SelectFilter/SelectFilter'
import { ConnectedRouter } from 'react-router-redux';
import { Router, Route, NavLink, Redirect, Switch } from 'react-router-dom';
import history from '../../history';
// import './App.css';

class App extends Component {
	static childContextTypes = {
		user: PropTypes.string
	};

	getChildContext() {
		return {
			user: this.state.username
		}
	};

	state = {
		username: ''
	};

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
			<ConnectedRouter history = {history}>
				<div className="App">
					<div>
						<h2>Main menu</h2>
						<div><NavLink activeStyle={{color: 'red'}} to="/counter">Counter</NavLink></div>
						<div><NavLink activeStyle={{color: 'red'}} to="/filters">Filters</NavLink></div>
						<div><NavLink activeStyle={{color: 'red'}} to="/articles">Articles</NavLink></div>
					</div>
					<UserForm value = {this.state.username} onChange = {this.handleUserChange} />
					<Switch>
						<Route path = "/counter" component = {Counter} />
						<Route path = "/filters" component = {SelectFilter} />
						<Route path = "/articles" component = {Articles} />
						<Route path = "/comments" component = {CommentsPage} />
						{/* <Redirect from = "/comments/" to = "/comments/1" /> */}
						<Route path = "*" component = {NotFound} />
					</Switch>
					{/* <Counter />
					<DateRange />
					<SelectFilter /> */}
					
					{/* <ArticleList /> */}
				</div>
			</ConnectedRouter>
		);
	}

	handleUserChange = (username) => this.setState({ username });

	

}

export default App;
