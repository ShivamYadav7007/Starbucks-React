import React from "react";

export default function ReusableDropdown(props) {
  return (
    <div class="flex justify-between mx-5 mt-8 full:justify-around full:mt-14 full:flex-col">
      <h2 class="full:text-xl">{props.title}</h2>
      <svg
        viewBox="0 0 24 24"
        class="full:hidden valign-middle absoluteCenter"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        focusable="false"
        width="12%"
        height="12%"
      >
        <path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path>
        <circle
          class="sb-icon-hover"
          fill="transparent"
          cx="50%"
          cy="50%"
          r="75%"
        ></circle>
      </svg>
      <ul class="hidden space-y-5 text-gray-500 full:block full:text-base full:mt-8">
        <li>{props.list.one}</li>
        <li>{props.list.two}</li>
        <li>{props.list.three}</li>
        <li>{props.list.four}</li>
        <li>{props.list.five}</li>
      </ul>
    </div>
  );
}
