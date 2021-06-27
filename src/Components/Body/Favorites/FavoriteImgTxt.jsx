import React from "react";

export default function FavoriteImgTxt() {
  return (
    <div class="py-6 shadow-inner lg:px-40 place-self-center md:flex bg-primary-light">
      <div class="object-cover md:flex md:min-h-imgS md:flex-1">
        <img
          src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png"
          alt="coffee mug"
        />
      </div>
      <dl class="p-5 mt-3 space-y-5 text-center md:place-self-center md:px-16 md:flex-1 md:text-left md:flex md:flex-col">
        <dt class="text-xl font-medium smMd:text-2xl">Customize your drink</dt>
        <dd class="text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nobis
          ullam illo, nihil similique explicabo nam sequi cumque consectetur
          eius!
        </dd>
      </dl>
    </div>
  );
}
