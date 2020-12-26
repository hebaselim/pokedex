import "./NavList.css";

import { Link } from "react-router-dom";
import React from "react";
import { getIdFromUrl } from "../../utils/helpers";

function NavList(props) {
  return (
    <ul>
      {props.data.map((item) => {
        const id = getIdFromUrl(item.url);
        return (
          <li key={item.name}>
            <Link onMouseEnter={() => props.onHover(id)} to={`/pokemon/${id}`}>
              {id} {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default NavList;
