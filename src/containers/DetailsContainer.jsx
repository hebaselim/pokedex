import React, { Fragment } from "react";
import { capitalizeFirstLetter, findKey, padStart } from "../utils/helpers";

import CenteredLayout from "../components/layouts/CenteredLayout";
import { IMG_URL } from "../apiConstants";
import ListContainer from "./ListContainer";
import { Loading } from "../components/Loading";
import MasterDetailsLayout from "../components/layouts/MasterDetails";
import PokemonDetailsCard from "../components/card/Card";
import useDetailsFetcher from "../hooks/DetailsFetch";

function DetailsContainer({ match }) {
  const { data, status, error } = useDetailsFetcher(`${match.params.id}`);

  status === "LOADED" && console.log("fetcher data", data);
  return (
    <MasterDetailsLayout>
      <ListContainer />

      <CenteredLayout>
        {status === "LOADING" && <Loading />}
        {status === "LOADED" && (
          <Fragment>
            <PokemonDetailsCard
              name={capitalizeFirstLetter(data.details.name)}
              img={`${IMG_URL}${padStart(match.params.id)}.png`}
              id={match.params.id}
              types={data.details.types}
              stats={data.details.stats}
              evolutions={findKey(data.evolution.chain, "species")}
            ></PokemonDetailsCard>
          </Fragment>
        )}
        {error && <div>Error</div>}
      </CenteredLayout>
    </MasterDetailsLayout>
  );
}

export default DetailsContainer;
