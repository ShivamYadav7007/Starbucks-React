import React from "react";

export default function ReusableTitle(props) {
  return (
    <dl class="mt-14 full:w-72">
      <dt class="flex text-lg font-bold md:text-2xl">
        {props.text}
        <span class="my-auto text-sm">★</span>
        per dollar
      </dt>
      <dd class="mt-1 text-sm md:text-base">{props.children}</dd>
    </dl>
  );
}
