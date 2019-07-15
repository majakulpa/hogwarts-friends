import React from "react";
import spellPhoto from "../img/spell.jpeg";
import magic from "../img/magic.jpeg";
import charm from "../img/charm.jpeg";
import hex from "../img/hex.jpeg";
import smoke from "../img/smoke.jpeg";
import ball from "../img/ball.jpeg";

const Spells = ({ spell, type, effect }) => {
  return (
    <div>
      <ul className="flex justify-around flex-wrap">
        <div className="tc bg-washed-yellow br3 grow bw2 shadow-5 mb5 pa4 card o-90 spell">
          <img
            className="grow br-100 h5 w5 dib ba b--black-10 pa2"
            src={
              type === "Charm"
                ? magic
                : type === "Enchantment"
                ? spellPhoto
                : type === "Spell"
                ? ball
                : type === "Hex"
                ? hex
                : type === "Curse"
                ? smoke
                : charm
            }
            alt="Spell"
          />
          <li className="f2 mb2">{spell}</li>
          <li className="f4 fw4 gray mt0">
            Type:{" "}
            <span className="f4 fw6 dark-gray">{type ? type : "unknown"}</span>
          </li>
          <li className="f4 fw4 gray mt0">
            Effect:{" "}
            <span className="f4 fw6 dark-gray">
              {effect ? effect : "unknown"}
            </span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Spells;
