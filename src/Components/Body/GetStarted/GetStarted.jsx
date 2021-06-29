import React from "react";
import Reusable from "./Reusable";

export default function GetStarted() {
  return (
    <div>
      <dl className="p-6 text-center">
        <dt className="pt-5 text-xl font-semibold md:text-3xl smMd:text-2xl">
          Getting started is easy
        </dt>
        <dd className="mt-5 text-sm md:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </dd>
      </dl>
      <div className="space-y-4 md:text-center md:space-y-0 md:flex md:pt-8">
        <Reusable
          src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg"
          title1="Donwload the starbucks app"
          title2="Create an account"
          containsTitle2={true}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          laudantium, culpa eum inventore maiores fuga.
        </Reusable>

        <Reusable
          src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg"
          title1="Order and pay"
          containsTitle2={false}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          laudantium, culpa eum inventore maiores fuga.
        </Reusable>

        <Reusable
          src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg"
          title1="Earn Stars and get rewards"
          containsTitle2={false}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          laudantium, culpa eum inventore maiores fuga.
        </Reusable>
      </div>
    </div>
  );
}
