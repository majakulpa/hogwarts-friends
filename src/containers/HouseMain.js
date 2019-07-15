import React, { Component } from "react";

import Houses from "../components/Houses";

const apiKey = "$2a$10$p9mDUvZSVb8La9gWakRlMu6yjFCrwVC2WAe5JWrdARv7zfhhtp1H.";

class App extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    const url2 = `https://www.potterapi.com/v1/houses/?key=${apiKey}`;

    fetch(url2)
      .then(response => response.json())
      .then(houses => {
        if (!houses) {
          return undefined;
        }
        this.setState({ houses });
      });
  }

  render() {
    let houses = this.state.houses;
    return (
      <div>
        <h1 className="f1 tc header">Hogwarts Houses</h1>
        <ul className="flex flex-wrap justify-around">
          {houses.map((dorm, id) => {
            return (
              <Houses
                key={id}
                name1={dorm.name}
                school1={dorm.school}
                mascot={dorm.mascot}
                head={dorm.headOfHouse}
                ghost={dorm.houseGhost}
                founder={dorm.founder}
                values={dorm.values}
                colors={dorm.colors}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
