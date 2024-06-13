import React from "react";
import { Spinner } from "@phosphor-icons/react";

const RotatingSpinner = () => {
  return (
    <Spinner color="white" weight="duotone" size={32}>
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="4s"
        repeatCount="indefinite"
      ></animate>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="5s"
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
      ></animateTransform>
    </Spinner>
  );
};

export default RotatingSpinner;
