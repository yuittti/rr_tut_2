import React, { Component } from 'react';
import { addComment } from '../actions';
import { connect } from 'react-redux';
import './style.css';

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
}

class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>user:</label>
                <input 
                    value={this.state.user}
                    onChange={this.handleChange('user')}
                    className={this.getClassName('user')} />
                <br></br>
                <label>comment:</label> 
                <input 
                    value={this.state.text}
                    onChange={this.handleChange('text')}
                    className={this.getClassName('text')} />
                <input type="submit" value="submit" />
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.addComment(this.state);
        this.setState({
            user: '',
            text: ''
        })
    }

    handleChange = type => ev => {
        const {value} = ev.target;
        if (value.length > limits[type].max) return;
        this.setState({
            [type]: value
        })
    }

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
        ? 'form-input__error' : '';
}

export default connect(null, (dispatch,ownProps) => ({
    addComment: (comment) => {
        dispatch(addComment(comment, ownProps.articleId))
    }
}))(CommentForm);