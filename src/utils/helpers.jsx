export function getIdFromUrl(url) {
    return url.split("/")[6];
  }

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export function findKey(object,key) {
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
    return objects;
  }

 