import React from "react";

export default function RewardPage() {
  return (
    <div>
      <dl className="p-6 text-center">
        <dt className="pt-5 text-xl font-medium md:text-3xl smMd:text-2xl">
          Getting started is easy
        </dt>
        <dd className="mt-5 text-sm md:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </dd>
      </dl>
      <div className="space-y-4 md:text-center md:space-y-0 md:flex md:pt-8">
        <div className="flex p-2 md:flex md:flex-col md:space-y-4">
          <div>
            <img
              className="max-w-small md:mx-auto"
              src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg"
              alt="starbuck 1"
            />
          </div>
          <dl className="px-3 space-y-4">
            <dt className="text-lg font-medium md:hidden">
              Donwload the starbucks app
            </dt>
            <dt className="hidden text-xl font-medium md:block">
              Create an account
            </dt>
            <dd className="text-sm md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur laudantium, culpa eum inventore maiores fuga.
            </dd>
          </dl>
        </div>

        <div className="flex p-2 md:flex md:flex-col md:space-y-4">
          <div>
            <img
              className="max-w-small md:mx-auto"
              src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg"
              alt="starbuck 1"
            />
          </div>
          <dl className="px-3 space-y-4">
            <dt className="text-lg font-medium md:mt-4">Order and pay</dt>
            <dd className="text-sm md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur laudantium, culpa eum inventore maiores fuga.
            </dd>
          </dl>
        </div>

        <div className="flex p-2 md:flex md:flex-col md:space-y-4">
          <div>
            <img
              className="max-w-small md:mx-auto"
              src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg"
              alt="starbuck 1"
            />
          </div>
          <dl className="px-3 space-y-4">
            <dt className="text-lg font-medium md:mt-4">
              Earn Stars and get rewards
            </dt>
            <dd className="text-sm md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur laudantium, culpa eum inventore maiores fuga.
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
