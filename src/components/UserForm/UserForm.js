import React, { Component } from 'react';

class UserForm extends Component {
    render() {
        return(
            <form>
                Name: <input type="text" value={this.props.value} onChange={this.handleUserChange} />
            </form>
            
        )
    }

    handleUserChange = ev => {
        this.props.onChange(ev.target.value);
	}
}

export default UserForm;