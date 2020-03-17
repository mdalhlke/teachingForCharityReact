import React, {Component} from 'react';
import './Students.css';

class AddStudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            grade: '',
            contact: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        let state = {};
        state[event.target.dataset.key] = event.target.value;
        this.setState(state);
    }
    
    handleSubmit(event) {
        alert("state : " +  JSON.stringify(this.state));
        this.props.handleAdd(this.state);
    }
    
    render() {
        return (
        <form id="addStudForm" onSubmit={this.handleSubmit}>
            <label className="addStudformLabel">
            First Name:
            <input type="text" data-key="firstName" value={this.state.firstName} onChange={this.handleChange} />
            </label>
            <label className="addStudformLabel">
            Last Name:
            <input type="text" data-key="lastName" value={this.state.lastName} onChange={this.handleChange} />
            </label>
            <label className="addStudformLabel">
            Grade:
            <input type="text" data-key="grade" value={this.state.grade} onChange={this.handleChange} />
            </label>
            <label className="addStudformLabel">
            Contact:
            <input type="text" data-key="contact" value={this.state.contact} onChange={this.handleChange} />
            </label>
            <input className="button" type="submit" value="Submit" />
        </form>
        );
    }
}

export default AddStudentForm