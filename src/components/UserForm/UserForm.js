import React, { Component } from 'react';

class UserForm extends Component {
    state = {
        username: ''
    }

    render() {
        return(
            <form>
                Name: <input type="text" value={this.state.username} onChange={this.handleUserChange} />
            </form>
            
        )
    }

    handleUserChange = ev => {
		this.setState({
			username: ev.target.value
		})
	}
}

export default UserForm;