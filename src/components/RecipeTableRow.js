import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default class StudentTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.image}</td>
                <td>{this.props.obj.duration}</td>
                <td>{this.props.obj.type}</td>
                <td>{this.props.obj.difficulty}</td>
                <td>{this.props.obj.ingredients}</td>
                <td>{this.props.obj.instructions}</td>
                <td>
                    <Link className="edit-link" to={"/update-recipe/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}