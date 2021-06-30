import React from "react";

export default function ReusableOptions(props) {
  return (
    <div class="flex md:flex-1 md:mt-4">
      <div>
        <img class="max-w-medium" src={props.url} alt="scan and pay logo" />
      </div>
      <dl class="pl-3 space-y-4">
        <dt class="text-lg font-semibold md:text-xl">{props.title}</dt>
        <dd class="text-sm md:max-w-xs md:text-base">{props.children}</dd>
      </dl>
    </div>
  );
}
