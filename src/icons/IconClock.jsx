import * as React from "react";

function IconClock(props) {
  return (
    <svg
      width={20}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 6.5a2 2 0 00-2 2 2 2 0 001 1.72v3.28a1 1 0 102 0v-3.28a2 2 0 001-1.72 2 2 0 00-2-2zm0-6a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
        fill="#C4C4C4"
      />
    </svg>
  );
}

export default IconClock;