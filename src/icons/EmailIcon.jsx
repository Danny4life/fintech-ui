import * as React from "react";

function EmailIcon(props) {
  return (
    <svg
      width={90}
      height={72}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M90 52L70 72 56 58l6-6 8 8 14-14 6 6zm-42 4H8V16l32 20 32-20v20h8V8c0-4.4-3.6-8-8-8H8C3.6 0 0 3.6 0 8v48c0 4.4 3.6 8 8 8h40v-8zM72 8L40 28 8 8h64z"
        fill="#012A4A"
      />
    </svg>
  );
}

export default EmailIcon;