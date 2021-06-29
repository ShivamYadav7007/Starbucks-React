import React from "react";

export default function JoinButton(props) {
  return (
    <a
      href={props.linkUrl}
      className={`${props.sm} px-4 py-2 flex-shrink-0 ${props.color} text-white text-sm font-medium text-center border-2 rounded-full lg:${props.lg} md:${props.md}`}
    >
      {props.children}
    </a>
  );
}
