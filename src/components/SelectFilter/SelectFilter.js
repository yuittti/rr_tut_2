import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import 'react-select/dist/react-select.css';
import { changeSelection } from '../actions';

class SelectFilter extends Component {

    render() {

        const {selected, articles} = this.props;
        const options = articles.map(article => ({
			label: article.title,
			value: article.id
        }));
        
        return (
            <div>
                <Select options={options} value={selected} onChange={this.changeSelection} multi={true} />
            </div>
        )
    }

    changeSelection = selection => {
		this.props.changeSelection(selection.map(option => option.value));
	}
}

export default connect(state => ({
    selected: state.filters.selected,
    articles: state.articles
}), {changeSelection} )(SelectFilter);