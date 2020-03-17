import React, {Component} from 'react';
import AddStudentForm from './AddStudentForm';
import './Students.css';


class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            showAddBtn: true
        }
    }

    addStudent(show) {
        this.setState({showForm: show, showAddBtn: !show});
    }

    handleAdd(event) {
        //call webservice to POST/save new student
    }

    render() {
        debugger;
        return (
            <div>
                {this.state.showAddBtn && <button class="button" onClick={this.addStudent.bind(this, true)}>Add Student</button>}
                {this.state.showForm && <AddStudentForm onSubmit={this.handleAdd.bind(this)}/>}
            </div> 
        )
    }
}

export default AddStudent