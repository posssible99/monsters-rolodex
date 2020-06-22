import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

class App extends Component {
  constructor() {
    // We use super to access to the constructor of the class component
    super();
    // Then we can access this.state, that i suppose is defined in Component
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  // This method is used only the first time that it render the component
  componentDidMount() {
    // We can request data with fetch, but remember to convert it to JSON
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    // we are deconsstructing, we create two variables that have the values of this.state
    const { monsters, searchField } = this.state;
    // We pass to filter a anonymous function that is going to applied a test(than can be true or false), if it id true it adds it to the arrya
    const filteredMonsters = monsters.filter((monster) =>
      // This is our condition
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        {/* We pass the monster array to the component card-list */}
        <CardList monsters={filteredMonsters}></CardList>
        {/* map need a function to it applied to every single element of the array */}
        {/* map() returns a array with the changes that our function made to it */}
        {/* WE give to each element a key, that's beacuse react need to know what element rerender if it need to */}
      </div>
    );
  }
}

export default App;
// Important notes
// - Every time it calss the the method setState, it rerender(to show the changes).
// -Life Cycle Methods:It executes before we render, example:componentDidMount
// Arrow Function-lexicalScoping: This type of functions uses "this" in context where is definded, so when we pass it to a function it works
// like the handleChange function
// A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).
