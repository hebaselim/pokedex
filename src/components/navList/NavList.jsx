import "./NavList.css";

import { Link } from "react-router-dom";
import React from "react";
import { getIdFromUrl } from "../../utils/helpers";

function NavList(props) {
  return (
    <ul className="nav-list-container">
      {props.data.map((item) => {
        const id = getIdFromUrl(item.url);
        return (
          <li key={item.name}>
            <Link onMouseEnter={() => props.onHover(id)} to={`/pokemon/${id}`}>
              {item.name} - {id}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default NavList;
