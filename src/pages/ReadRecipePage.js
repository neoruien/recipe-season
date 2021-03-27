import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class ReadRecipePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            image: '',
            duration: 30,
            type: 'Breakfast',
            difficulty: 'Easy',
            ingredients: '',
            instructions: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/recipes/read-recipe/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    image: res.data.image,
                    duration: res.data.duration,
                    type: res.data.type,
                    difficulty: res.data.difficulty,
                    ingredients: res.data.ingredients,
                    instructions: res.data.instructions
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    render() {
        return (
            <div>
                <h2>Recipe Title: {this.state.title}</h2>
            </div>
        );
    }
}