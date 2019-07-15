import React from "react";
import Card from "./Card";

const CharList = ({ character }) => {
  return (
    <div>
      <ul className="flex flex-wrap justify-around">
        {character.map((character, id) => {
          return (
            <Card
              key={id}
              name={character.name}
              role={character.role}
              house={character.house}
              school={character.school}
              patronus={character.patronus}
              blood={character.bloodStatus}
              deathEater={character.deathEater}
              army={character.dumbledoresArmy}
              order={character.orderOfThePhoenix}
              ministry={character.ministryOfMagic}
              alias={character.alias}
              boggart={character.boggart}
              wand={character.wand}
              animagus={character.animagus}
              species={character.species}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CharList;
