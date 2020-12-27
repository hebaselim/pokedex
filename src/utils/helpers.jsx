import { DETAILS_API } from "../apiConstants";

export function getIdFromUrl(url) {
  return url.split("/")[6];
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function findKey(object, key) {
  let objects = [];
  const rec = (o) => {
    for (let k in o) {
      if (typeof o[k] === "object") {
        if (k === key) {
          objects.push(o[k]);
        }
        rec(o[k]);
      }
    }
  };
  rec(object);
  return objects.reverse();
}

export function padStart(id) {
  return id.padStart(3, "0");
}

export function onHover(id, url = DETAILS_API) {
  if (!localStorage.getItem(id)) {
    fetch(url + id)
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem(id, JSON.stringify({ details: response }));
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
}
