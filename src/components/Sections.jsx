import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import useOnScreen from "../hooks/useOnScreen";
import { Link, Element } from "react-scroll";

import Hero from "./Hero";
import Skills from "./Skills";
import OverTheYear from "./OverTheYear";
import ToMyProject from "./ToMyProject";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import useScreenSize from "../hooks/useScreenSize";

const Sections = () => {
  const { width, height } = useScreenSize();
  console.log(width, height);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const footer = useRef(null);

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();

  const isSection1Visible = useOnScreen(
    section1,
    width >= 1024 ? "-300px" : "-350px",
  );
  const isSection2Visible = useOnScreen(
    section2,
    width >= 1024 ? "-300px" : "-350px",
  );
  const isSection3Visible = useOnScreen(
    section3,
    width >= 1024 ? "-300px" : "0px",
  );
  const isSection4Visible = useOnScreen(
    section4,
    width >= 1024 ? "-300px" : "-100px",
  );
  const isSection5Visible = useOnScreen(
    section5,
    width >= 1024 ? "-300px" : "0px",
  );
  const isFooterVisible = useOnScreen(footer, width >= 1024 ? "-300px" : "0px");

  console.log("isSection1Visible", isSection1Visible);
  console.log("isSection2Visible", isSection2Visible);
  console.log("isSection3Visible", isSection3Visible);
  console.log("isSection4Visible", isSection4Visible);
  console.log("isSection5Visible", isSection5Visible);
  console.log("isSection6Visible", isFooterVisible);

  useEffect(() => {
    if (isSection1Visible) {
      controls1.start({ rotate: [0, 180], scale: 1 });
    } else {
      controls1.start({ rotate: 45, scale: 0.7 });
    }
  }, [isSection1Visible, controls1]);

  useEffect(() => {
    if (isSection2Visible) {
      controls2.start({ rotate: [0, 180], scale: 1 });
    } else {
      controls2.start({ rotate: 45, scale: 0.7 });
    }
  }, [isSection2Visible, controls2]);

  useEffect(() => {
    if (isSection3Visible) {
      controls3.start({ rotate: [0, 180], scale: 1 });
    } else {
      controls3.start({ rotate: 45, scale: 0.7 });
    }
  }, [isSection3Visible, controls3]);

  useEffect(() => {
    if (isSection4Visible) {
      controls4.start({ rotate: [0, 180], scale: 1 });
    } else {
      controls4.start({ rotate: 45, scale: 0.7 });
    }
  }, [isSection4Visible, controls4]);

  useEffect(() => {
    if (isSection5Visible) {
      controls5.start({ rotate: [0, 180], scale: 1 });
    } else {
      controls5.start({ rotate: 45, scale: 0.7 });
    }
  }, [isSection5Visible, controls5]);

  const logoRef = useRef(null);

  const logoControls = useAnimation();

  useEffect(() => {
    logoControls.start({ opacity: [0, 1], x: [-100, 0] });
  }, [logoControls, isSection5Visible, isSection1Visible, isSection3Visible]);

  return (
    <main className="static font-mont">
      {/* Logo */}
      <motion.div
        ref={logoRef}
        className="fixed left-32 top-10 z-10 hidden cursor-pointer lg:block"
        initial={{ opacity: 0, y: 0 }}
        animate={logoControls}
        onClick={() => window.scroll(0, 0)}
      >
        <svg
          width="100"
          height="40"
          viewBox="0 0 131 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_41_283)">
            <path
              d="M50.4774 0.300476H0.303238V15.3372H50.4774V0.300476Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M50.1742 0.60099V15.0247H0.606481V0.60099H50.1742ZM50.7807 0H0V15.6257H50.7807V0Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M32.6348 16.6234H17.4606V50.7055H32.6348V16.6234Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M32.3315 16.9239V50.399H17.776V16.9239H32.3315ZM32.938 16.3229H17.1695V51H32.938V16.3229Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M35.3033 50.6995V17.9816H50.4775V20.019H62.8315V35.0618H50.4775V50.6995H35.3033Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M50.1742 18.2821V20.3194H62.5282V34.7432H50.1742V50.3689H35.6187V18.2821H50.1742ZM50.7807 17.6811H35.0122V51H50.7807V35.3742H63.1347V19.7485H50.7807V17.6811Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M79.2975 0.300476H64.1233V50.6995H79.2975V0.300476Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M78.9942 0.60099V50.399H64.4387V0.60099H78.9942ZM79.6007 0H63.8322V51H79.6007V0Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M81.966 50.6995V0.300476H106.183L130.63 42.8205L117.482 50.4411L97.9164 16.419C97.882 16.3548 97.8304 16.3013 97.7673 16.2642C97.7042 16.2271 97.632 16.2079 97.5586 16.2087C97.4476 16.2087 97.3412 16.2524 97.2627 16.3301C97.1842 16.4079 97.1401 16.5134 97.1401 16.6234V50.6995H81.966Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M106.007 0.60099L114.758 15.8241L130.218 42.7124L117.597 50.0324L98.1894 16.2688C98.11 16.1328 97.9876 16.0266 97.8412 15.9664C97.6948 15.9062 97.5325 15.8954 97.3793 15.9358C97.2261 15.9761 97.0906 16.0653 96.9937 16.1896C96.8967 16.3139 96.8438 16.4663 96.843 16.6234V50.399H82.2874V0.60099H106.025M106.31 1.28968e-07H81.7719C81.757 -2.26154e-05 81.7423 0.00296322 81.7287 0.0087716C81.715 0.01458 81.7027 0.0230886 81.6925 0.0337792C81.6823 0.0444699 81.6744 0.0571157 81.6692 0.0709422C81.6641 0.0847686 81.6619 0.0994861 81.6627 0.11419V50.8858C81.6619 50.9005 81.6641 50.9152 81.6692 50.9291C81.6744 50.9429 81.6823 50.9555 81.6925 50.9662C81.7027 50.9769 81.715 50.9854 81.7287 50.9912C81.7423 50.997 81.757 51 81.7719 51H97.3282C97.3435 51.0009 97.3589 50.9985 97.3733 50.9931C97.3877 50.9877 97.4007 50.9793 97.4116 50.9685C97.4225 50.9577 97.4309 50.9448 97.4364 50.9305C97.4419 50.9163 97.4443 50.901 97.4434 50.8858V16.6294C97.4425 16.6142 97.4449 16.5989 97.4504 16.5847C97.4558 16.5704 97.4643 16.5575 97.4752 16.5467C97.4861 16.5359 97.4991 16.5275 97.5135 16.5221C97.5279 16.5167 97.5433 16.5143 97.5586 16.5152C97.5781 16.5154 97.5972 16.5204 97.6142 16.5299C97.6311 16.5393 97.6454 16.5529 97.6557 16.5693L117.312 50.7656C117.323 50.7825 117.338 50.7963 117.356 50.8057C117.374 50.8152 117.394 50.82 117.415 50.8197H117.469L130.945 43.0068C130.971 42.9907 130.989 42.9657 130.997 42.9368C131.005 42.9079 131.002 42.8772 130.988 42.8506L115.286 15.5296L106.389 0.054087C106.379 0.0376821 106.364 0.0241175 106.348 0.014659C106.331 0.00520041 106.311 0.000158422 106.292 1.28968e-07H106.31Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
          </g>
          <defs>
            <clipPath id="clip0_41_283">
              <rect width="131" height="51" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </motion.div>

      <div className="fixed z-10 cursor-pointer md:left-12 md:top-10 lg:hidden">
        <svg
          width="100"
          height="40"
          viewBox="0 0 131 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_41_283)">
            <path
              d="M50.4774 0.300476H0.303238V15.3372H50.4774V0.300476Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M50.1742 0.60099V15.0247H0.606481V0.60099H50.1742ZM50.7807 0H0V15.6257H50.7807V0Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M32.6348 16.6234H17.4606V50.7055H32.6348V16.6234Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M32.3315 16.9239V50.399H17.776V16.9239H32.3315ZM32.938 16.3229H17.1695V51H32.938V16.3229Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M35.3033 50.6995V17.9816H50.4775V20.019H62.8315V35.0618H50.4775V50.6995H35.3033Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M50.1742 18.2821V20.3194H62.5282V34.7432H50.1742V50.3689H35.6187V18.2821H50.1742ZM50.7807 17.6811H35.0122V51H50.7807V35.3742H63.1347V19.7485H50.7807V17.6811Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M79.2975 0.300476H64.1233V50.6995H79.2975V0.300476Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M78.9942 0.60099V50.399H64.4387V0.60099H78.9942ZM79.6007 0H63.8322V51H79.6007V0Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M81.966 50.6995V0.300476H106.183L130.63 42.8205L117.482 50.4411L97.9164 16.419C97.882 16.3548 97.8304 16.3013 97.7673 16.2642C97.7042 16.2271 97.632 16.2079 97.5586 16.2087C97.4476 16.2087 97.3412 16.2524 97.2627 16.3301C97.1842 16.4079 97.1401 16.5134 97.1401 16.6234V50.6995H81.966Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
            <path
              d="M106.007 0.60099L114.758 15.8241L130.218 42.7124L117.597 50.0324L98.1894 16.2688C98.11 16.1328 97.9876 16.0266 97.8412 15.9664C97.6948 15.9062 97.5325 15.8954 97.3793 15.9358C97.2261 15.9761 97.0906 16.0653 96.9937 16.1896C96.8967 16.3139 96.8438 16.4663 96.843 16.6234V50.399H82.2874V0.60099H106.025M106.31 1.28968e-07H81.7719C81.757 -2.26154e-05 81.7423 0.00296322 81.7287 0.0087716C81.715 0.01458 81.7027 0.0230886 81.6925 0.0337792C81.6823 0.0444699 81.6744 0.0571157 81.6692 0.0709422C81.6641 0.0847686 81.6619 0.0994861 81.6627 0.11419V50.8858C81.6619 50.9005 81.6641 50.9152 81.6692 50.9291C81.6744 50.9429 81.6823 50.9555 81.6925 50.9662C81.7027 50.9769 81.715 50.9854 81.7287 50.9912C81.7423 50.997 81.757 51 81.7719 51H97.3282C97.3435 51.0009 97.3589 50.9985 97.3733 50.9931C97.3877 50.9877 97.4007 50.9793 97.4116 50.9685C97.4225 50.9577 97.4309 50.9448 97.4364 50.9305C97.4419 50.9163 97.4443 50.901 97.4434 50.8858V16.6294C97.4425 16.6142 97.4449 16.5989 97.4504 16.5847C97.4558 16.5704 97.4643 16.5575 97.4752 16.5467C97.4861 16.5359 97.4991 16.5275 97.5135 16.5221C97.5279 16.5167 97.5433 16.5143 97.5586 16.5152C97.5781 16.5154 97.5972 16.5204 97.6142 16.5299C97.6311 16.5393 97.6454 16.5529 97.6557 16.5693L117.312 50.7656C117.323 50.7825 117.338 50.7963 117.356 50.8057C117.374 50.8152 117.394 50.82 117.415 50.8197H117.469L130.945 43.0068C130.971 42.9907 130.989 42.9657 130.997 42.9368C131.005 42.9079 131.002 42.8772 130.988 42.8506L115.286 15.5296L106.389 0.054087C106.379 0.0376821 106.364 0.0241175 106.348 0.014659C106.331 0.00520041 106.311 0.000158422 106.292 1.28968e-07H106.31Z"
              fill={
                isSection2Visible || isSection4Visible || isSection5Visible
                  ? "#285495"
                  : "#fff"
              }
            />
          </g>
          <defs>
            <clipPath id="clip0_41_283">
              <rect width="131" height="51" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {/* The Navigation Section */}
      <nav className={`hidden ${isFooterVisible ? "lg:hidden" : "lg:block"}`}>
        <ul className="fixed bottom-10 right-28 z-10">
          <Link
            to="section1"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.li className="my-3 flex justify-center" animate={controls1}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 14 14"
                fill={
                  isSection1Visible
                    ? "none"
                    : isSection3Visible
                      ? "#fff"
                      : "#0f172a"
                }
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.940474 0.940508H12.8215V12.8215H0.940474V0.940508Z"
                  stroke="#365486"
                />
              </svg>
            </motion.li>
          </Link>
          <Link
            to="section2"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.li className="my-3 flex justify-center" animate={controls2}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 14 14"
                fill={
                  isSection2Visible
                    ? "none"
                    : isSection3Visible
                      ? "#fff"
                      : "#0f172a"
                }
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.940474 0.940508H12.8215V12.8215H0.940474V0.940508Z"
                  stroke="#365486"
                />
              </svg>
            </motion.li>
          </Link>
          <Link
            to="section3"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.li className="my-3 flex justify-center" animate={controls3}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 14 14"
                fill={!isSection3Visible ? "#0f172a" : "none"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.940474 0.940508H12.8215V12.8215H0.940474V0.940508Z"
                  stroke={isSection3Visible ? "#fff" : "#365486"}
                />
              </svg>
            </motion.li>
          </Link>
          <Link
            to="section4"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.li className="my-3 flex justify-center" animate={controls4}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 14 14"
                fill={
                  isSection4Visible
                    ? "none"
                    : isSection3Visible
                      ? "#fff"
                      : "#0f172a"
                }
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.940474 0.940508H12.8215V12.8215H0.940474V0.940508Z"
                  stroke="#365486"
                />
              </svg>
            </motion.li>
          </Link>
          <Link
            to="section5"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.li className="my-3 flex justify-center" animate={controls5}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 14 14"
                fill={
                  isSection5Visible
                    ? "none"
                    : isSection3Visible
                      ? "#fff"
                      : "#0f172a"
                }
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.940474 0.940508H12.8215V12.8215H0.940474V0.940508Z"
                  stroke="#365486"
                />
              </svg>
            </motion.li>
          </Link>
        </ul>
      </nav>

      {/* The Content Section */}
      <div className="font-mont">
        <Element name="section1">
          <div
            ref={section1}
            className="lg:h-screen lg:snap-start lg:snap-always"
            id="section1"
          >
            <Hero />
          </div>
        </Element>
        <Element name="section2">
          <div
            ref={section2}
            className="lg:h-screen lg:snap-start lg:snap-always"
            id="section2"
          >
            <Skills />
          </div>
        </Element>
        <Element name="section3">
          <div
            ref={section3}
            className="lg:h-screen lg:snap-start lg:snap-always"
            id="section3"
          >
            <OverTheYear />
          </div>
        </Element>
        <Element name="section4">
          <div
            ref={section4}
            className="lg:h-screen lg:snap-start lg:snap-always"
            id="section4"
          >
            <ToMyProject />
          </div>
        </Element>
        <Element name="section5">
          <div
            ref={section5}
            className="lg:h-screen lg:snap-start lg:snap-always"
            id="section5"
          >
            <ContactMe />
          </div>
        </Element>

        <div
          ref={footer}
          className="lg:h-screen lg:snap-start lg:snap-always"
          id="footer"
        >
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Sections;
