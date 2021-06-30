import React from "react";

export default function TextRate(props) {
  return (
    <div className={`p-3 border-green-700 ${props.className}`}>
      <div class="flex">
        <p className="font-semibold">{props.text}</p>
        <span class="text-yellow-500 my-auto text-xs">★</span>
      </div>
    </div>
  );
}
