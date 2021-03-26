import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class CreateRecipePage extends Component {
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

  onSubmit = e => {
    e.preventDefault()
    console.log('Recipe created');
    console.log(`Title: ${this.state.title}`);
    console.log(`Image: ${this.state.image}`);
    console.log(`Duration: ${this.state.duration}`);
    console.log(`Type: ${this.state.type}`);
    console.log(`Difficulty: ${this.state.difficulty}`);
    console.log(`Ingredients: ${this.state.ingredients}`);
    console.log(`Instructions: ${this.state.instructions}`);
    this.setState({
      title: '',
      image: '',
      duration: 30,
      type: 'Breakfast',
      difficulty: 'Easy',
      ingredients: '',
      instructions: ''
    });
  }

  render() {
    return (<div class="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        {/* title */}
        <Form.Group controlId="title">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.title} onChange={this.onChangeTitle} placeholder="Enter recipe title"/>
        </Form.Group>
        {/* image*/}
        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" value={this.state.image} onChange={this.onChangeImage} placeholder="Enter URL of recipe display image"/>
        </Form.Group>
        {/* duration */}
        <Form.Group controlId="duration">
          <Form.Label>Cooking Duration</Form.Label>
          <Form.Control type="range" value={this.state.duration} onChange={this.onChangeDuration} />
        </Form.Group>
        {/* type */}
        <Form.Group controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Control as="select"  value={this.state.type} onChange={this.onChangeType}>
            <option>Breakfast</option>
            <option>Meals</option>
            <option>Snacks</option>
            <option>Soups</option>
            <option>Desserts</option>
            <option>Salads</option>
            <option>Dinner</option>
            <option>Smoothies</option>
          </Form.Control>
        </Form.Group>
        {/* difficulty */}
        <Form.Group controlId="difficulty">
          <Form.Label>Difficulty Level</Form.Label>
          <Form.Control as="select" value={this.state.difficulty} onChange={this.onChangeDifficulty} >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
            <option>Masterchef</option>
          </Form.Control>
        </Form.Group>
        {/* ingredients */}
        <Form.Group controlId="ingredients">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control type="textarea" value={this.state.ingredients} onChange={this.onChangeIngredients} placeholder="List down ingredients"/>
        </Form.Group>
        {/* instructions */}
        <Form.Group controlId="instructions">
          <Form.Label>Instructions</Form.Label>
          <Form.Control type="textarea" value={this.state.instructions} onChange={this.onChangeInstructions} placeholder="Describe instructions"/>
        </Form.Group>
        {/* submit */}
        <Button variant="danger" size="lg" block="block" type="submit">
          Create Recipe
        </Button>
      </Form>
    </div>);
  }
}