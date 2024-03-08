// Checkbox.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function Checkbox() {
  return (
    <div>
        <div className="checkbox">
          <FontAwesomeIcon icon={faSquare} className="check-icon" />
        </div>
        <div className="checkbox">
          <FontAwesomeIcon icon={faSquareCheck} className="check-icon" />
        </div>
    </div>
  );
}

export default Checkbox;
