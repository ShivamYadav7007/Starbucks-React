import React from "react";
import StarBg from "./StarBg";

export default function Header() {
  return (
    <div>
      <div class="sticky flex justify-between p-2 font-medium text-white bg-green-900 full:top-20 -top-0 place-items-center">
        <h3 class="text-sm md:font-bold md:text-base md:ml-16 md:align-middle">
          STARBUCKS<sup>&reg;</sup>{" "}
          <span class="invisible smMd:visible">REWARDS</span>
          <span class="smMd:invisible"> REWARDS </span>
        </h3>

        <button class="border-2 rounded-full w-44 lg:invisible md:invisible">
          <p class="p-2 text-sm font-medium">Join in the app</p>
        </button>
      </div>
      <StarBg />
    </div>
  );
}
