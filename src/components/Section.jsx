import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { animate } from "framer-motion";

const Section = () => {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const isSection1Visible = useOnScreen(section1, "-1px");
  const isSection2Visible = useOnScreen(section2, "-1px");
  const isSection3Visible = useOnScreen(section3, "-1px");
  animate("svg", { rotate: [0, 45] });
  return (
    <div className="static">
      <ul className="fixed bottom-5 right-14">
        <li className="my-2 flex justify-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isSection1Visible ? (
              <path
                d="M0.940474 0.940508H12.8215V12.8215H0.940474V0.940508Z"
                stroke="#365486"
              />
            ) : (
              <path
                d="M0.106567 7.60663L7.60657 0.106628L15.1066 7.60663L7.60657 15.1066L0.106567 7.60663Z"
                fill="#365486"
              />
            )}
          </svg>
        </li>
        <li className="my-2 flex justify-center">
          {isSection2Visible ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.940474 0.940508H12.8215V12.8215H0.940474V0.940508Z"
                stroke="#365486"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.106567 7.60663L7.60657 0.106628L15.1066 7.60663L7.60657 15.1066L0.106567 7.60663Z"
                fill="#365486"
              />
            </svg>
          )}
        </li>
        <li className="my-2 flex justify-center">
          {isSection3Visible ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.940474 0.940508H12.8215V12.8215H0.940474V0.940508Z"
                stroke="#365486"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.106567 7.60663L7.60657 0.106628L15.1066 7.60663L7.60657 15.1066L0.106567 7.60663Z"
                fill="#365486"
              />
            </svg>
          )}
        </li>
      </ul>
      <div>
        <div
          ref={section1}
          className="h-screen snap-start snap-always bg-slate-500"
          id="section1"
        >
          Section
        </div>
        <div
          ref={section2}
          className="h-screen snap-start snap-always bg-blue-500"
          id="section2"
        >
          Section
        </div>
        <div
          ref={section3}
          className="h-screen snap-start snap-always bg-red-500"
          id="section3"
        >
          Section
        </div>
      </div>
    </div>
  );
};

export default Section;
