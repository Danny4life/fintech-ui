import * as React from "react";

function Amoeba(props) {
  return (
    <svg
      width={282}
      height={172}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M221.448-37.134c83.301-1.795 105.778 52.763 154.191 152.781 1.856 86.173-64.168 157.485-147.468 159.279-83.301 1.795 46.337-129.833-154.19-152.781-200.528-22.948 64.167-157.485 147.467-159.28z"
        fill="#4361EE"
        fillOpacity={0.05}
      />
    </svg>
  );
}

export default Amoeba;