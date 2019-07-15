import React from "react";

import magic from "../img/magic.jpeg";
import person from "../img/person.jpeg";
import castle from "../img/castle.jpeg";
import Footer from "./Footer";

function MainPage() {
  return (
    <div className="main">
      <h1 className="header-main">Welcome to Hogwarts!</h1>
      <div className="flex justify-around flex-wrap">
        <div className="tc bg-washed-yellow br3 grow bw2 shadow-5 mb4 pa3 ma2 mcard o-90">
          <img
            className="grow br-100 h5 w5 dib ba b--black-10 pa2"
            src={person}
            alt="Spell"
          />

          <h3 className="f2 mb2">Characters</h3>
          <p className="f4 fw6 dark-gray">
            Discover more about your favourite characters and creatures from
            across the Wizarding World.
          </p>
          <div className="ph2 mt4 grow">
            <a
              className="br2 f3 link dim ba ph3 pv2 mb2 dib near-black"
              href="/characters/"
            >
              Discover
            </a>
          </div>
        </div>
        <div className="tc bg-washed-yellow br3 grow bw2 shadow-5 mb4 ma2 pa3 mcard o-90">
          <img
            className="grow br-100 h5 w5 dib ba b--black-10 pa2"
            src={magic}
            alt="Spell"
          />

          <h3 className="f2 mb2">Spells</h3>
          <p className="f4 fw6 dark-gray">
            Learn all about spells, charms, curses and enchantments used in
            Wizarding World.
          </p>
          <div className="ph2 mt4 grow">
            <a
              className="br2 f3 link dim ba ph3 pv2 mb2 dib near-black"
              href="/spells/"
            >
              Discover
            </a>
          </div>
        </div>
        <div className="tc ma2 bg-washed-yellow br3 grow bw2 shadow-5 mb4 pa3 mcard o-90">
          <img
            className="grow br-100 h5 w5 dib ba b--black-10 pa2"
            src={castle}
            alt="Spell"
          />

          <h3 className="f2 mb2">Houses</h3>
          <p className="f4 fw6 dark-gray">
            Learn all about houses of Hogwarts, the best School of Witchcraft
            and Wizardry .
          </p>
          <div className="ph2 mt4 grow">
            <a
              className="br2 f3 link dim ba ph3 pv2 mb2 dib near-black"
              href="/houses/"
            >
              Discover
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
