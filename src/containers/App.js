import React, { Component } from "react";

import CharList from "../components/CharList";
import Search from "../components/Search";
import Scroll from "../components/Scroll";
import "./App.css";

const apiKey = "$2a$10$p9mDUvZSVb8La9gWakRlMu6yjFCrwVC2WAe5JWrdARv7zfhhtp1H.";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    const url = `https://www.potterapi.com/v1/characters/?key=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(characters => {
        if (!characters) {
          return undefined;
        }
        this.setState({ characters });
        //console.log(characters[150].name);
      });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { characters, searchfield } = this.state;

    const filteredFriends = characters.filter(character => {
      return character.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !characters.length ? (
      <h2 className="white tc">Loading...</h2>
    ) : (
      <div>
        <h1 className="f1 tc header">Hogwarts Friends</h1>
        <Search searchChange={this.onSearchChange} />

        <Scroll>
          <CharList character={filteredFriends} />
        </Scroll>
      </div>
    );
  }
}

export default App;
