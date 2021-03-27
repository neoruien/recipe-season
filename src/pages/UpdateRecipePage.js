// import React, { Component } from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

// export default function UpdateRecipePage() {
//     return (
//         <div>
//             <h2>Update Recipe</h2>
//         </div>
//     );
// }
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditRecipeComponent extends Component {

  constructor(props) {
    super(props)
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeDifficulty = this.onChangeDifficulty.bind(this);
    this.onChangeIngredients = this.onChangeIngredients.bind(this);
    this.onChangeInstructions = this.onChangeInstructions.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    axios.get('http://localhost:4000/Recipes/update-recipe/' + this.props.match.params.id)
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

  onChangeTitle = e => {
    this.setState({title: e.target.value})
  }

  onChangeImage = e => {
    this.setState({image: e.target.value})
  }

  onChangeDuration = e => {
    this.setState({duration: e.target.value})
  }

  onChangeType = e => {
    this.setState({type: e.target.value})
  }

  onChangeDifficulty = e => {
    this.setState({difficulty: e.target.value})
  }

  onChangeIngredients = e => {
    this.setState({ingredients: e.target.value})
  }

  onChangeInstructions = e => {
    this.setState({instructions: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();

    const recipeObject = {
        title: this.state.title,
        image: this.state.image,
        duration: this.state.duration,
        type: this.state.type,
        difficulty: this.state.difficulty,
        ingredients: this.state.ingredients,
        instructions: this.state.instructions
    };

    axios.put('http://localhost:4000/recipes/update-recipe/' + this.props.match.params.id, recipeObject)
      .then((res) => {
        console.log(res.data)
        console.log('Recipe successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Recipe List 
    this.props.history.push('/recipe-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeRecipeName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeRecipeEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeRecipeRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Recipe
        </Button>
      </Form>
    </div>);
  }
}