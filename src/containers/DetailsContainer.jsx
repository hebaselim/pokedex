import React, { Fragment } from "react";
import { capitalizeFirstLetter, findKey } from "../utils/helpers";

import Card from "../components/card/Card";
import CenteredLayout from "../components/layouts/CenteredLayout";
import { Loading } from "../components/Loading";
import useDetailsFetcher from "../hooks/DetailsFetch";

function DetailsContainer({ match }) {
  const { data, status, error } = useDetailsFetcher(`${match.params.id}`);
  // status === "LOADED" && console.log(data, getEvolution(data.evolution))
  return (
    <CenteredLayout>
    <div>
      {status === "LOADING" && <Loading />}
      {status === "LOADED" && (
        <Fragment>
          <Card 
            name={capitalizeFirstLetter(data.details.name)}
            img={data.details.sprites.front_default}
            id={match.params.id}
            types={data.details.types}
            stats={data.details.stats}
            evolutions={findKey(data.evolution.chain, "species")}
            ></Card>
        </Fragment>
      )}
      {error && <div>Error</div>}

    </div>
    </CenteredLayout>
  );
}

export default DetailsContainer;
