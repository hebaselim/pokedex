import { DETAILS_API, LIST_API } from "../apiConstants";

import { Fragment } from "react";
import { Loading } from "../components/Loading";
import NavList from "../components/navList/NavList";
import useFetcher from "../hooks/ListFetcher";

function ListContainer() {
  const { data, status } = useFetcher(LIST_API);
  const { results } = data;

  const onHover = (id) => {
    if(!localStorage.getItem(id)){
      fetch(DETAILS_API + id).then((response) => response.json())
      .then((response) => {
          
        localStorage.setItem(id, JSON.stringify({"details":response}));
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }};

  return (
    <Fragment>
      {status === "LOADING" ? (
        <Loading />
      ) : (
        <NavList onHover={onHover} data={results} />
      )}
    </Fragment>
  );
}

export default ListContainer;
