import React from "react";
import lion from "../img/lion.png";
import eagle from "../img/eagle.png";
import badger from "../img/badger.png";
import serpent from "../img/serpent.png";

const Houses = ({
  name1,
  school1,
  mascot,
  head,
  ghost,
  founder,
  values,
  colors
}) => {
  return (
    <div className="tc bg-washed-yellow br3 grow bw2 shadow-5 mb5 pa3 hcard o-90 house">
      <img
        className="grow h5 w5 dib pa2 contain"
        src={
          name1 === "Ravenclaw"
            ? eagle
            : name1 === "Gryffindor"
            ? lion
            : name1 === "Hufflepuff"
            ? badger
            : serpent
        }
        alt="House"
      />
      <li className="f2 mb2">{name1}</li>
      <li className="f4 fw4 gray mt0">
        School:{" "}
        <span className="f4 fw6 dark-gray">
          {school1 ? school1 : "unknown"}
        </span>
      </li>
      <li className="f4 fw4 gray mt0">
        Mascot:{" "}
        <span className="f4 fw6 dark-gray">{mascot ? mascot : "unknown"}</span>
      </li>
      <li className="f4 fw4 gray mt0">
        Head of The House:{" "}
        <span className="f4 fw6 dark-gray">{head ? head : "unknown"}</span>
      </li>
      <li className="f4 fw4 gray mt0">
        Ghost of The House:{" "}
        <span className="f4 fw6 dark-gray">{ghost ? ghost : "unknown"}</span>
      </li>
      <li className="f4 fw4 gray mt0">
        Founder:{" "}
        <span className="f4 fw6 dark-gray">
          {founder ? founder : "unknown"}
        </span>
      </li>

      <li className="f4 fw4 gray mt0">
        Values:{" "}
        <span className="f4 fw6 dark-gray">
          {values[0] + ", " + values[1] + ", " + values[2] + ", " + values[3]}
        </span>
      </li>
      <li className="f4 fw4 gray mt0">
        Colors:{" "}
        <span className="f4 fw6 dark-gray">
          {colors[0] + " & " + colors[1]}
        </span>
      </li>
    </div>
  );
};

export default Houses;
