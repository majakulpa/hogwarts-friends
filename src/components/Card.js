import React from "react";

const Card = ({
  name,
  role,
  house,
  school,
  patronus,
  blood,
  deathEater,
  army,
  order,
  ministry,
  alias,
  boggart,
  wand,
  animagus,
  species
}) => {
  return (
    <div>
      <div className="tc bg-washed-yellow br3 grow bw2 shadow-5 mb5 pv3 card o-90">
        <img
          className="grow br-100 h5 w5 dib ba b--black-10 pa2"
          src={`https://robohash.org/${name}?set=set5`}
          alt="Avatar"
        />
        <li className="f2 mb2">{name}</li>
        <li className="f4 fw4 gray mt0">
          Role:{" "}
          <span className="f4 fw6 dark-gray">{role ? role : "unknown"}</span>
        </li>
        <li className="f4 fw4 gray mt0">
          House:{" "}
          <span className="f4 fw6 dark-gray">{house ? house : "unknown"}</span>
        </li>
        <li className="f4 fw4 gray mt0">
          School:{" "}
          <span className="f4 fw6 dark-gray">
            {school ? school : "unknown"}
          </span>
        </li>
        <li className="f4 fw4 gray mt0">
          Species:{" "}
          <span className="f4 fw6 dark-gray">
            {species ? species : "unknown"}
          </span>
        </li>
        <li className="f4 fw4 gray mt0">
          Patronus:{" "}
          <span className="f4 fw6 dark-gray">
            {patronus ? patronus : "unknown"}
          </span>
        </li>
        <li className="f4 fw4 gray mt0">
          Blood status:{" "}
          <span className="f4 fw6 dark-gray">{blood ? blood : "unknown"}</span>
        </li>
        <li className="f4 fw4 gray mt0">
          Death Eater:{" "}
          <span className="f4 fw6 dark-gray">{deathEater ? "yes" : "no"}</span>
        </li>
        <li className="f4 fw4 gray mt0">
          Dumbledore's Army:{" "}
          <span className="f4 fw6 dark-gray">{army ? "yes" : "no"}</span>
        </li>
        <li className="f4 fw4 gray mt0">
          Order of The Phoenix:{" "}
          <span className="f4 fw6 dark-gray">{order ? "yes" : "no"}</span>
        </li>
        <li className="f4 fw4 gray mt0">
          Ministry of Magic:{" "}
          <span className="f4 fw6 dark-gray">{ministry ? "yes" : "no"}</span>
        </li>
        <li className="f4 fw4 gray mt0">
          Alias:{" "}
          <span className="f4 fw6 dark-gray">{alias ? alias : "unknown"}</span>
        </li>
        <li className="f4 fw4 gray mt0">
          Boggart:{" "}
          <span className="f4 fw6 dark-gray">
            {boggart ? boggart : "unknown"}
          </span>
        </li>
        <li className="f4 fw4 gray mt0">
          Wand:{" "}
          <span className="f4 fw6 dark-gray">{wand ? wand : "unknown"}</span>
        </li>
        <li className="f4 fw4 gray mt0">
          Animagus:{" "}
          <span className="f4 fw6 dark-gray">
            {animagus ? animagus : "unknown"}
          </span>
        </li>
      </div>
    </div>
  );
};

export default Card;
