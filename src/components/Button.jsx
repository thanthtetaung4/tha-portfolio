import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ children }) => {
  return (
    <>
      <button className="flex h-16 items-center border border-primary bg-white px-7 py-3  text-lg text-purpleAccent transition-[color,box-shadow] duration-[400ms,600ms] hover:text-white hover:shadow-[inset_17rem_0_0_0] hover:shadow-primary">
        {children}
        <FaArrowRight className="ml-2 w-5" />
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
