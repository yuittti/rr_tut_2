import React, { Component } from 'react';

export default (OriginalComponent) => class WrappedComponent extends Component {
    state = {
        openArticleId: null
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle} />
    }

    toggleOpenArticle = openArticleId => ev => {
        this.setState({
            openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
        })
    }
}