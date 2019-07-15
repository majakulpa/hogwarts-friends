import React from "react";
import Spells from "./Spells";

const SpellList = ({ spell }) => {
  return (
    <div>
      <ul className="flex flex-wrap justify-around">
        {spell.map((spell, id) => {
          return (
            <Spells
              key={id}
              spell={spell.spell}
              type={spell.type}
              effect={spell.effect}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SpellList;
