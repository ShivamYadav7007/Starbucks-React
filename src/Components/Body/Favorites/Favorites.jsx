import React from "react";
import FavoriteImgTxt from "./FavoriteImgTxt";
import TextRate from "./TextRate";

export default function Favorites() {
  return (
    <div>
      <div class="pt-12 mt-16 space-y-6 bg-blue-50">
        <div class="text-xl font-semibold text-center md:mb-14 md:text-3xl smMd:text-2xl">
          <h2>Get your favorites for free</h2>
        </div>
        <div class="flex justify-around text-lg font-normal md:mx-40 md:text-2xl md:justify-evenly">
          <TextRate text="25" isBorder={true} />
          <TextRate text="50" isBorder={false} />
          <TextRate text="150" isBorder={false} />
          <TextRate text="200" isBorder={false} />
          <TextRate text="400" isBorder={false} />
        </div>
      </div>
      <FavoriteImgTxt />
    </div>
  );
}
