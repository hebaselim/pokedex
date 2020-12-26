import "./Card.css";

import { Fragment } from "react";

const Card = (props) => {
    const { name, img, types, id, stats, evolutions} = props;

    return (
    <div className="card-container">
        <h2>{`${name} #${id}`}</h2>  
        <div className="card-img-container">
        <img
            src={img}
            alt={name}
        />
        </div>
     
        <Types types={types}/>
        <Stats stats={stats}/>
        <Evolution evolutions={evolutions}/>
    </div>)
}

const Types = ({types}) => {
    return (
        <Fragment>
            <h2>Types</h2>
            {types.map((t, index)=> (<Badge key={index}>{t.type.name}</Badge>))}
        </Fragment>
    )
    
}

const Stats = ({stats}) => {
    return (
        <Fragment>
            <h2>Stats</h2>
            {stats.map((s, index)=> (<div key={index}>{s.stat.name} - {s.base_stat}</div>))}
        </Fragment>
    )  
}

const Evolution = ({evolutions}) => {
    console.log(evolutions)
    return (
        <Fragment>
            <h2>Evolutions</h2>
            {evolutions.map((e, index)=> (<div key={index}> {e.name}</div>))}
        </Fragment>
    )
    
}

const Badge = ({children}) => {
   return <div className="badge">{children}</div>
 }


export default Card;