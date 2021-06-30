import React from "react";

export default function TermsTitle(props) {
  return (
    <h2 class="font-semibold uppercase tracking-wider text-gray-600 md:text-base">
      {props.children}
    </h2>
  );
}
