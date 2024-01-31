import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

const Test = () => {
  const dumbRef = useRef();
  const visible = useOnScreen(dumbRef, "-200px");
  return (
    <div>
      <div className="h-screen"></div>
      <p ref={dumbRef} className="h-screen">
        {" "}
        {visible ? <span>Hi</span> : ""} asldjfaslkdjkf
      </p>
    </div>
  );
};

export default Test;
