import React, { Component } from "react";
import SpellList from "../components/SpellList";
import Scroll from "../components/Scroll";
import Search from "../components/Search";

const apiKey = "$2a$10$p9mDUvZSVb8La9gWakRlMu6yjFCrwVC2WAe5JWrdARv7zfhhtp1H.";

class SpellsMain extends Component {
  constructor() {
    super();
    this.state = {
      spells: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    const url1 = `https://www.potterapi.com/v1/spells/?key=${apiKey}`;

    fetch(url1)
      .then(response => response.json())
      .then(spells => {
        if (!spells) {
          return undefined;
        }
        this.setState({ spells });
      });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    //let spells = this.state.spells;
    const { spells, searchfield } = this.state;
    const filteredSpells = spells.filter(spell => {
      return spell.effect.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !spells.length ? (
      <h2 className="white tc">Loading...</h2>
    ) : (
      <div>
        <h1 className="f1 tc header">Spells</h1>
        <Search searchChange={this.onSearchChange} />

        <Scroll>
          <SpellList spell={filteredSpells} />
        </Scroll>
      </div>
    );
  }
}

export default SpellsMain;
