import React from "react";

export default function Offers() {
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
        <dl class="mt-14 full:w-80">
          <dt class="flex text-lg font-medium md:text-2xl">
            1
            <svg
              height="20"
              width="20"
              class="text-black fill-current star rating"
              data-rating="1"
            >
              <polygon
                points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                // style="fill-rule:nonzero;"
              />
            </svg>{" "}
            per dollar
          </dt>
          <dd class="mt-1 text-sm md:text-base">Pay as you go</dd>
        </dl>
        <div class="mt-8 space-y-4 md:flex">
          <div class="flex md:flex-1 md:mt-4">
            <div>
              <img
                class="max-w-medium"
                src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png"
                alt="scan and pay logo"
              />
            </div>
            <dl class="pl-3 space-y-4">
              <dt class="text-lg font-medium md:text-xl">
                Scan an pay separately
              </dt>
              <dd class="text-sm md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </dd>
            </dl>
          </div>

          <div class="flex md:flex-1">
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur laudantium, culpa eum inventore maiores fuga.
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <hr class="mx-6 border-gray-600" />
      <div class="my-7 space-y-11 full:flex">
        <dl class="mt-8 full:mt-14">
          <dt class="flex text-lg font-medium md:text-2xl full:w-48">
            2
            <svg
              height="20"
              width="20"
              class="text-black fill-current star rating"
              data-rating="1"
            >
              <polygon
                points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                // style="fill-rule:nonzero;"
              />
            </svg>{" "}
            per dollar
          </dt>
          <dd class="mt-1 text-sm md:text-base">Add funds in the app</dd>
        </dl>
        <div class="space-y-4 md:flex">
          <div class="flex md:mt-4">
            <div>
              <img
                class="max-w-medium"
                src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png"
                alt="Preload image"
              />
            </div>
            <dl class="pl-3 space-y-4">
              <dt class="text-lg font-medium md:text-xl">Preload</dt>
              <dd class="text-sm md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur laudantium, culpa eum inventore maiores fuga.
              </dd>
            </dl>
          </div>

          <div class="flex">
            <div>
              <img
                class="max-w-medium"
                src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png"
                alt="Register image"
              />
            </div>
            <dl class="pl-3 space-y-4">
              <dt class="text-lg font-medium md:text-xl">
                Register your gift card
              </dt>
              <dd class="text-sm md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur laudantium, culpa eum inventore maiores fuga.
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <hr class="mx-6 border-gray-700" />
      <div class="mt-8 full:flex">
        <dl>
          <dt class="flex text-lg font-medium md:text-2xl full:mt-8 full:w-60">
            Up to 3
            <svg
              height="20"
              width="20"
              class="text-black fill-current star rating"
              data-rating="1"
            >
              <polygon
                points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                // style="fill-rule:nonzero;"
              />
            </svg>{" "}
            per dollar
          </dt>
          <dd class="mt-1 text-sm md:text-base">
            With Starbucks Reward Visa Card
          </dd>
        </dl>
        <div class="mt-8 space-y-4">
          <div class="flex">
            <div>
              <img
                class="max-w-medium"
                src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/3A.png"
                alt="Earn Stars even faster image"
              />
            </div>
            <dl class="px-3 space-y-4">
              <dt class="text-lg font-medium">Earn Stars even faster</dt>
              <dd class="max-w-xl text-sm md:mr-60 md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                consectetur consequatur doloribus incidunt expedita officiis.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti mollitia quidem harum perferendis unde quasi. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
