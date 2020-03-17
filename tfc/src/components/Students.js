import React, {Component} from 'react';
import './Students.css';

class Students extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [
                {id: 1, lastName: 'Dominique', firstName: 'Sean', grade: 'junior', contact: '858-706-5959'},
                {id: 2, lastName: 'Dahlke', firstName: 'Rohan', grade: 'senior', contact: '858-706-5959'},
                {id: 3, lastName: 'George', firstName: 'Reginold', grade: 'freshman', contact: '858-706-5959'}
            ]
        }
    }
    
    renderTableData() {
        return this.state.students.map((student, index) => {
           const {id, firstName, lastName, grade, contact} = student
           debugger
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{firstName}</td>
                 <td>{lastName}</td>
                 <td>{grade}</td>
                 <td>{contact}</td>
              </tr>
           )
        })
     }

    render() {
        return (
            <div>
                <h1>Student Table</h1>
                <table id="students">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Grade</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Students