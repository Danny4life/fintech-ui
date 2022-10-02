import * as React from "react";

function NotificationIcon(props) {
  return (
    <svg
      width={24}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_19_480)">
        <path
          d="M22.086 20.172A3.685 3.685 0 0121 17.55V14.5a9 9 0 00-18 0v3.05a3.685 3.685 0 01-1.086 2.622A3.121 3.121 0 004.121 25.5H7.1a5 5 0 009.8 0h2.98a3.122 3.122 0 002.207-5.328h-.001zM12 27.5a3 3 0 01-2.816-2h5.632a3 3 0 01-2.816 2zm7.879-4H4.121a1.121 1.121 0 01-.793-1.914A5.672 5.672 0 005 17.55V14.5a7 7 0 1114 0v3.05a5.672 5.672 0 001.672 4.036 1.121 1.121 0 01-.793 1.914z"
          fill="#012A4A"
        />
      </g>
      <circle cx={18} cy={6.5} r={6} fill="#F71805" />
      <defs>
        <clipPath id="prefix__clip0_19_480">
          <path fill="#fff" transform="translate(0 5.5)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default NotificationIcon;