import React from "react";

export default function ReusablePrivacy(props) {
  return (
    <h3 className="full:mt-6 hover:underline">
      <a href={props.url}>{props.children}</a>
    </h3>
  );
}
