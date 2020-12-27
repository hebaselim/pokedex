import { Fragment } from "react";
import { LIST_API } from "../apiConstants";
import { Loading } from "../components/Loading";
import NavList from "../components/navList/NavList";
import { onHover } from "../utils/helpers";
import useFetcher from "../hooks/ListFetcher";

function ListContainer() {
  const { data, status } = useFetcher(LIST_API);
  const { results } = data;

  return (
    <Fragment>
      {status === "LOADING" ? (
        <Loading />
      ) : (
        <NavList onHover={(id) => onHover(id)} data={results} />
      )}
    </Fragment>
  );
}

export default ListContainer;
