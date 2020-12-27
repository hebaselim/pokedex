import { DETAILS_API, SPECIES_API } from "../apiConstants";
import { useEffect, useState } from "react";

//TODO: Remove offset if not used

export const useDetailsFetcher = (id) => {
  const [status, setStatus] = useState("LOADING");
  const [data, setData] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    let unmounted = false;
    const details = JSON.parse(localStorage.getItem(id));

    if (!details) {
      Promise.all([
        fetch(DETAILS_API + id).then((response) => response.json()),
        fetch(SPECIES_API + id)
          .then((response) => response.json())
          .then((data) =>
            fetch(data.evolution_chain.url).then((response) => response.json())
          ),
      ])
        .then(([details, evolution]) => {
          if (!unmounted) {
            localStorage.setItem(
              id,
              JSON.stringify({
                details: details,
                evolution: evolution,
              })
            );
            setData({
              details: details,
              evolution: evolution,
            });
            setStatus("LOADED");
          }
        })
        .catch((error) => {
          setError(error);
          setStatus("ERROR");
        });
    } else {
      if (!details.evolution) {
        fetch(SPECIES_API + id)
          .then((response) => response.json())
          .then((data) =>
            fetch(data.evolution_chain.url).then((response) => response.json())
          )
          .then((response) => {
            const newDetails = { ...details, evolution: response };
            if (!unmounted) {
              localStorage.setItem(id, JSON.stringify(newDetails));
              setData(newDetails);
              setStatus("LOADED");
            }
          })
          .catch((error) => {
            setError(error);
            setStatus("ERROR");
          });
      } else {
        setData(JSON.parse(localStorage.getItem(id)));
        setStatus("LOADED");
      }
    }
  }, [id]);
  return { data, status, error };
};

export default useDetailsFetcher;
