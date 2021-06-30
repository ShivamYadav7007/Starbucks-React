import React from "react";
import JoinButton from "../sharedComponents/JoinButton";

export default function HeroSection() {
  return (
    <div class="bg-right-bottom bg-no-repeat bg-contain min-h-small md:h-screen md:pt-14 bg-primary-light md:flex bg-star-pattern-small md:bg-cover md:bg-half md:bg-star-pattern-big">
      <div class="px-3 py-5 mx-4 text-center md:text-left place-self-center">
        <div className="font-bold">
          <h1 class="pt-5 text-2xl smMd:text-3xl md:leading-8 md:text-3xl">
            FREE COFFEE
          </h1>
          <h1 class="text-2xl leading-9 smMd:text-3xl md:text-3xl">
            IS A TAP AWAY
          </h1>
        </div>
        <h3 class="mt-4 text-sm md:text-xl md:text-gray-800">
          Join now to start earning rewards
        </h3>
        <div class="mt-8 max-w-max mx-auto md:ml-0">
          <JoinButton
            className="font-semibold bg-green-700 lg:hidden md:hidden"
            linkUrl="https://google.com"
          >
            Join in the app
          </JoinButton>
          <JoinButton
            className="hidden font-semibold bg-green-700 lg:block md:block"
            linkUrl="https://google.com"
          >
            Join now
          </JoinButton>
        </div>

        <p class="mt-3 underline md:hidden">
          <a href="#">or join online</a>
        </p>
        <p class="hidden mt-3 text-xl md:block">
          or{" "}
          <a class="underline" href="#">
            join in the app{" "}
          </a>
          for the best experience
        </p>
      </div>
    </div>
  );
}
