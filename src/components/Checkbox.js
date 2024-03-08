// Checkbox.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function Checkbox({checked = false, onClick}) {
  return (
    <div onClick={onClick}>
      {!checked && (
        <div className="checkbox unchecked">
          <FontAwesomeIcon icon={faSquare} className="check-icon" />
        </div>
      )}

      {checked && (
        <div className="checkbox checked">
          <FontAwesomeIcon icon={faSquareCheck} className="check-icon" />
        </div>
      )}
    </div>
  );
}

export default Checkbox;
