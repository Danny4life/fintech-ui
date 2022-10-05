import * as React from "react";

function Card(props) {
  return (
    <svg
      width={15}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 .75H2a1.5 1.5 0 00-1.5 1.5v10.5H2V2.25h9V.75zm2.25 3H5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h8.25a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5zm0 12H5V5.25h8.25v10.5z"
        fill="#012A4A"
      />
    </svg>
  );
}

export default Card;