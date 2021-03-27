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

    // Redirect to HomePage 
    this.props.history.push('/')
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
          Update Recipe
        </Button>
      </Form>
    </div>);
  }
}