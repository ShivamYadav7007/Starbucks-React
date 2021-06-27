import React from "react";
import Extras from "./Extras/Extras";
import Favorites from "./Favorites/Favorites";
import Offers from "./Offers/Offers";
import RewardPage from "./RewardPage/RewardPage";
import StarCodes from "./StarCodes/StarCodes";
import ExtraTerms from "./Terms/ExtraTerms";

export default function Body() {
  return (
    <div>
      <RewardPage />
      <Favorites />
      <Extras />
      <Offers />
      <StarCodes />
      <ExtraTerms />
      <hr class="border-2 border-gray-600" />
    </div>
  );
}
