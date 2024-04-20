import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";


export const BackButton = ({ destination = "/" }) => {
  return (
    <div>
      <Link
        to={destination}
        className="bg-purple text-purple text-3xl py-1 rounded-lg w-fit ">
<FontAwesomeIcon icon={faChevronLeft} size={"xs"} />
      </Link>
    </div>
  );
};
