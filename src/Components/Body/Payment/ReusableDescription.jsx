import React from "react";
import ReusableOptions from "./ReusableOptions";

export default function ReusableDescription(props) {
  return (
    <div class="mt-8 space-y-4 md:flex">
      <ReusableOptions title={props.title} url={props.url1}>
        {props.children}
      </ReusableOptions>

      {props.containsTwo && (
        <ReusableOptions title={props.title} url={props.url2}>
          {props.children}
        </ReusableOptions>
      )}

      {/* <div class="flex md:flex-1">
        <div>
          <img
            class="max-w-medium"
            src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png"
            alt="save payment in the app logo"
          />
        </div>
        <dl class="pl-3 space-y-4">
          <dt class="text-lg font-medium md:text-xl">
            Save payment in the app
          </dt>
          <dd class="text-sm md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            laudantium, culpa eum inventore maiores fuga.
          </dd>
        </dl>
      </div> */}
    </div>
  );
}
