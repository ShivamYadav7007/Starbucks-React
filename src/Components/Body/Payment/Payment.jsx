import React from "react";
import ReusableDescription from "./ReusableDescription";
import ReusableTitle from "./ReusableTitle";

export default function Payment() {
  return (
    <div class="px-5 mt-24 bg-secondary-light py-7">
      <dl class="text-center pt-7">
        <dt class="pt-5 text-xl font-medium md:text-3xl md:font-bold smMd:text-2xl">
          Cash or cards, you earn Stars
        </dt>
        <dd class="mt-5 text-sm md:text-base md:mx-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum
          animi deleniti mollit
        </dd>
      </dl>
      <div class="my-7 space-y-11 full:flex">
        <ReusableTitle text="1">Pay as you go</ReusableTitle>
        <ReusableDescription
          url1="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png"
          url2="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png"
          title1="Scan an pay separately"
          title2="Save payment in the app"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          containsTwo={true}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          laudantium, culpa eum inventore maiores fuga.
        </ReusableDescription>

        <hr class="mx-3 border-gray-600" />
      </div>
      <div class="my-7 space-y-11 full:flex">
        <ReusableTitle text="2">Add funds in the app</ReusableTitle>
        <ReusableDescription
          url1="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png"
          url2="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png"
          title1="Payload"
          title2="Register your gift card"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          containsTwo={true}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          laudantium, culpa eum inventore maiores fuga.
        </ReusableDescription>
      </div>
      <hr class="mx-3 border-gray-700" />
      <div class="mt-8 full:flex">
        <ReusableTitle text="Upto 3">
          With Starbucks Rewards Visa Card
        </ReusableTitle>
        <ReusableDescription
          url1="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/3A.png"
          title1="Register your gift card"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          containsTwo={false}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          laudantium, culpa eum inventore maiores fuga.
        </ReusableDescription>
      </div>
    </div>
  );
}
