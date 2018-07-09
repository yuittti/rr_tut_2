import React from 'react';
import PropTypes from 'prop-types';

function LocalizedText(props, context) {
    if (typeof props.children !== 'string') {
        console.log('String was expected');
        return <span>{props.children}</span>;
    }

    return <span>{context.dictionary[props.children] || props.children}</span>;
}

LocalizedText.propTypes = {
    children: PropTypes.string
};

LocalizedText.contextTypes = {
    dictionary: PropTypes.object.isRequired
};

export default LocalizedText;