import * as React from "react";

function Icon(props) {
  return (
    <svg
      width={18}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.342 10.142a5.427 5.427 0 10-6.71 0A9.044 9.044 0 00.004 17.54a.91.91 0 101.81.2 7.236 7.236 0 0114.38 0 .904.904 0 00.904.804h.1a.905.905 0 00.796-.995 9.045 9.045 0 00-5.653-7.407zM8.987 9.5a3.618 3.618 0 110-7.236 3.618 3.618 0 010 7.236z"
        fill="#D0D0D0"
      />
    </svg>
  );
}

export default Icon;