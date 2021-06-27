import React from "react";
import FavoriteImgTxt from "./FavoriteImgTxt";

export default function Favorites() {
  return (
    <div>
      <div class="pt-12 mt-16 space-y-6 bg-blue-50">
        <div class="text-xl font-medium text-center md:mb-14 md:text-3xl smMd:text-2xl">
          <h2>Get your favorites for free</h2>
        </div>
        <div class="flex justify-around text-lg font-normal md:mx-40 md:text-2xl md:justify-evenly">
          <div>
            <div class="flex">
              <p>25</p>
              <svg
                height="20"
                width="20"
                class="text-yellow-600 fill-current star rating"
                data-rating="1"
              >
                <polygon
                  points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                  //   style="fill-rule:nonzero;"
                />
              </svg>
            </div>
            <div class="w-20 h-1 bg-green-600 -ml-7"></div>
          </div>
          <div>
            <div class="flex">
              <p>50</p>
              <svg
                height="20"
                width="20"
                class="text-yellow-600 fill-current star rating"
                data-rating="1"
              >
                <polygon
                  points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                  //   style="fill-rule:nonzero;"
                />
              </svg>
            </div>
          </div>
          <div>
            <div class="flex">
              <p>150</p>
              <svg
                height="20"
                width="20"
                class="text-yellow-600 fill-current star rating"
                data-rating="1"
              >
                <polygon
                  points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                  //   style="fill-rule:nonzero;"
                />
              </svg>
            </div>
          </div>
          <div>
            <div class="flex">
              <p>200</p>
              <svg
                height="20"
                width="20"
                class="text-yellow-600 fill-current"
                data-rating="1"
              >
                <polygon
                  points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                  //   style="fill-rule:nonzero;"
                />
              </svg>
            </div>
          </div>
          <div>
            <div class="flex">
              <p>400</p>
              <svg
                height="20px"
                width="20px"
                class="text-yellow-600 fill-current"
                data-rating="1"
              >
                <polygon
                  points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                  //   style="fill-rule:nonzero;"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <FavoriteImgTxt />
    </div>
  );
}
