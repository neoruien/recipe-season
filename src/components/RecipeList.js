import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import RecipeTableRow from './RecipeTableRow';


export default class RecipeList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/recipes/')
      .then(res => {
        this.setState({
          recipes: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.recipes.map((res, i) => {
      return <RecipeTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Duration</th>
            <th>Type</th>
            <th>Difficulty</th>
            <th>Ingredients</th>
            <th>Instructions</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}