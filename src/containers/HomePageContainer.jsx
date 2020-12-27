import { IMG_URL, LIST_API } from "../apiConstants";
import {
  capitalizeFirstLetter,
  getIdFromUrl,
  onHover,
  padStart,
} from "../utils/helpers";

import CenteredLayout from "../components/layouts/CenteredLayout";
import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";
import { PokemonCard } from "../components/card/Card";
import useListFetcher from "../hooks/ListFetcher";

function HomePageContainer() {
  const { data, status } = useListFetcher(LIST_API);
  const { results } = data;
  const items =
    results &&
    results.map((item, index) => {
      const id = getIdFromUrl(item.url);
      return (
        <Link
          key={item.name}
          to={`/pokemon/${id}`}
          onMouseEnter={() => onHover(id)}
        >
          <PokemonCard
            name={capitalizeFirstLetter(item.name)}
            id={id}
            img={`${IMG_URL}${padStart(id)}.png`}
          ></PokemonCard>
        </Link>
      );
    });

  return (
    <CenteredLayout>
      {status === "LOADING" ? <Loading /> : items}
    </CenteredLayout>
  );
}

export default HomePageContainer;
