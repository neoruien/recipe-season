import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class RecipeTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    deleteRecipe() {
        axios.delete('http://localhost:4000/recipes/delete-recipe/' + this.props.obj._id)
            .then((res) => {
                console.log('Recipe successfully deleted')
            }).catch((error) => {
                console.log(error)
            })
    }

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
                    <Link className="edit-link" to={"/read-recipe/" + this.props.obj._id}>
                        View
                    </Link>
                    <Link className="edit-link" to={"/update-recipe/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteRecipe} size="sm" variant="danger">
                        Delete
                    </Button>
                </td>
            </tr>
        );
    }
}