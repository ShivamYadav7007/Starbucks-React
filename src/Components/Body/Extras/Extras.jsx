import React from "react";

export default function Extras() {
  return (
    <div class="mt-6">
      <dl class="p-6 text-center">
        <dt class="pt-5 text-xl font-medium md:text-4xl smMd:text-2xl">
          Endless Extras
        </dt>
        <dd class="mt-5 text-sm md:mx-14 md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum
          animi deleniti mollitia sapiente sequi in veritatis eaque aut nisi?
          Sunt obcaecati ipsum eveniet omnis saepe? Dolor a iure sed!
        </dd>
      </dl>
      <div class="space-y-4 md:flex md:pt-8 md:text-center">
        <div class="flex p-2 md:flex md:flex-col md:mt-5 md:space-x-4">
          <div>
            <img
              class="max-w-medium md:mx-auto"
              src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"
              alt="starbuck 1"
            />
          </div>
          <dl class="px-3 space-y-4">
            <dt class="text-lg font-medium md:mt-7 md:text-xl">Fun freebies</dt>
            <dd class="text-sm md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur laudantium, culpa eum inventore maiores fuga.
            </dd>
            <dd class="text-sm text-green-700 underline">Learn more</dd>
          </dl>
        </div>

        <div class="flex p-2 md:flex md:flex-col md:space-y-4">
          <div>
            <img
              class="max-w-medium md:mx-auto"
              src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
              alt="starbuck 2"
            />
          </div>
          <dl class="px-3 space-y-4 ">
            <dt class="text-lg font-medium md:mt-4 md:text-xl">
              Order and pay
            </dt>
            <dd class="text-sm md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur laudantium, culpa eum inventore maiores fuga.
            </dd>
            <dd class="text-sm text-green-700 underline">Learn more</dd>
          </dl>
        </div>

        <div class="flex p-2 md:flex md:flex-col md:space-y-4">
          <div>
            <img
              class="max-w-medium md:mx-auto"
              src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
              alt="starbuck 3"
            />
          </div>
          <dl class="px-3 space-y-4">
            <dt class="text-lg font-medium md:mt-4 md:text-xl">
              Earn Stars and get rewards
            </dt>
            <dd class="text-sm md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur laudantium, culpa eum inventore maiores fuga.
            </dd>
            <dd class="text-sm text-green-700 underline">Learn more</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
