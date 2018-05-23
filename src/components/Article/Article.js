import React, { Component } from 'react';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isCommentsOpen: false
        }

        this.toggleOpen = this.toggleOpen.bind(this);
        this.getBody = this.getBody.bind(this);
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const {article} = this.props;
        const {isCommentsOpen} = this.state;
        return (
            <section>
                {article.text}
            </section>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article;