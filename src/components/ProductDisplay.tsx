import product1 from "../assets/images/product/product-1.jpg";
import product2 from "../assets/images/product/product-2.jpg";
import product3 from "../assets/images/product/product-3.jpg";
import product4 from "../assets/images/product/product-4.jpg";
import product5 from "../assets/images/product/product-5.jpg";
import product6 from "../assets/images/product/product-6.jpg";
import product7 from "../assets/images/product/product-7.jpg";
import product8 from "../assets/images/product/product-8.jpg";

import { FaEye, FaShoppingCart } from "react-icons/fa";

type productDisplayProps = {
  name: string;
};

export const ProductDisplay = ({ name }: productDisplayProps) => {
  const product = [
    { img: product1, name: "Colorful Stylish Shirt", price: "$123.00" },
    { img: product2, name: "Colorful Stylish Shirt", price: "$123.00" },
    { img: product3, name: "Colorful Stylish Shirt", price: "$123.00" },
    { img: product4, name: "Colorful Stylish Shirt", price: "$123.00" },
    { img: product5, name: "Colorful Stylish Shirt", price: "$123.00" },
    { img: product6, name: "Colorful Stylish Shirt", price: "$123.00" },
    { img: product7, name: "Colorful Stylish Shirt", price: "$123.00" },
    { img: product8, name: "Colorful Stylish Shirt", price: "$123.00" },
  ];

  return (
    <div className="product">
      <h2 className="product-title">{name}</h2>
      <div className="product-display">
        {product.map((item) => {
          return (
            <div className="product-card">
              <div className="product-card-top">
                <div>
                  <img src={item.img} />
                </div>
                <h4>{item.name}</h4>
                <h4>
                  {item.price} <span>{item.price}</span>
                </h4>
              </div>
              <div className="product-card-end">
                <a href="">
                  <i>
                    <FaEye />
                  </i>
                  View Detail
                </a>
                <a href="" className="display-end">
                  <i>
                    <FaShoppingCart />
                  </i>
                  Add To Cart
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
