import "./Card.css";

import { capitalizeFirstLetter } from "../../utils/helpers";

const PokemonDetailsCard = (props) => {
  const { name, img, types, id, stats, evolutions } = props;

  return (
    <div className="pokemon-details-card">
      <div className="pokemon-title">
        <h2>{`${name} #${id}`}</h2>
      </div>
      <div className="content">
        <div className="card-img-container">
          <img className="details-card-img" src={img} alt={name} />
        </div>
        <div className="details-container">
          <Types types={types} />
          <div className="evo-stat centered-details">
            <Stats stats={stats} />
            <Evolution evolutions={evolutions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const PokemonCard = (props) => {
  const { name, img, id } = props;

  return (
    <div className="pokemon-card">
      <div>
        {name} - {`#${id}`}
      </div>
      <div className="background">
        <img className="pokemon-img" src={img} alt={name}></img>
      </div>
    </div>
  );
};

const Types = ({ types }) => {
  return (
    <div className="centered-details">
      {types.map((t, index) => (
        <span className="type-badge" key={index}>
          {t.type.name}
        </span>
      ))}
    </div>
  );
};

const Stats = ({ stats }) => {
  return (
    <div className="stats">
      <h4>Stats</h4>
      <ul className="details-list">
        {stats.map((s, index) => (
          <li key={index}>
            {s.stat.name} - {s.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Evolution = ({ evolutions }) => {
  return (
    <div className="evolutions">
      <h4>Evolutions</h4>
      <ul className="details-list">
        {evolutions.map((e, index) => (
          <li key={index}>{capitalizeFirstLetter(e.name)}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetailsCard;
