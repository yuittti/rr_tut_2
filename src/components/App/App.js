import React, { Component } from 'react';
// import fetchNews from '../../utils/api';
// import { articles, normalizedComments, normalizedArticles } from '../../data/data';
import Articles from '../../components/routes/Articles';
import NotFound from '../../components/routes/NotFound';
import CommentsPage from '../../components/routes/CommentsPage';
import UserForm from '../../components/UserForm/UserForm';
import DateRange from '../../components/DateRange/DateRange';
import Counter from '../Counter/Counter';
import SelectFilter from '../SelectFilter/SelectFilter'
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom';
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
			</Router>
		);
	}

	

}

export default App;
