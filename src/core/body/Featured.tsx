import {
  FaCheck,
  FaShippingFast,
  FaExchangeAlt,
  FaPhoneVolume,
} from "react-icons/fa";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-1">
        <h3>
          <i>
            <FaCheck />
          </i>
          Quality Product
        </h3>
      </div>
      <div className="featured-2">
        <h3>
          <i>
            <FaShippingFast />
          </i>
          Free Shipping
        </h3>
      </div>
      <div className="featured-3">
        <h3>
          <i>
            <FaExchangeAlt />
          </i>
          14-Day Return
        </h3>
      </div>
      <div className="featured-4">
        <h3>
          <i>
            <FaPhoneVolume />
          </i>
          24/7 Support
        </h3>
      </div>
    </div>
  );
};
