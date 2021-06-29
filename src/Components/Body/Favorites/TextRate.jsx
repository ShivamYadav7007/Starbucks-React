import React from "react";

export default function TextRate(props) {
  const isBorder = props.isBorder && "border-b-4";
  console.log(isBorder);
  return (
    <div className={`p-3 border-green-700 ${isBorder}`}>
      <div class="flex">
        <p className="font-semibold">{props.text}</p>
        <span class="text-yellow-500 my-auto text-xs">★</span>
      </div>
    </div>
  );
}
