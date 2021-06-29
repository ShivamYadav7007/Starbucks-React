import React from "react";
import ReusableExtras from "./ReusableExtras";

export default function Extras() {
  return (
    <div class="mt-6">
      <dl class="p-6 text-center">
        <dt class="pt-5 text-xl font-semibold md:text-4xl smMd:text-2xl">
          Endless Extras
        </dt>
        <dd class="mt-5 text-sm md:mx-14 md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum
          animi deleniti mollitia sapiente sequi in veritatis eaque aut nisi?
          Sunt obcaecati ipsum eveniet omnis saepe? Dolor a iure sed!
        </dd>
      </dl>
      <div class="space-y-4 md:flex md:pt-8 md:text-center">
        <ReusableExtras
          src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"
          title="Fun Freebies"
          url="https://google.com"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsum ex
          accusamus laborum et molestias?
        </ReusableExtras>

        <ReusableExtras
          src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
          title="Order and pay"
          url="https://google.com"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsum ex
          accusamus laborum et molestias?
        </ReusableExtras>

        <ReusableExtras
          src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
          title="Earn Stars and get rewards"
          url="https://google.com"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsum ex
          accusamus laborum et molestias?
        </ReusableExtras>
      </div>
    </div>
  );
}
