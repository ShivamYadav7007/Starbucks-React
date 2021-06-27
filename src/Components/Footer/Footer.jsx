import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import Social from "./Social/Social";

export default function Footer() {
  return (
    <div>
      <Dropdown />
      <hr class="mx-5 border-gray-600" />
      <Social />
    </div>
  );
}
