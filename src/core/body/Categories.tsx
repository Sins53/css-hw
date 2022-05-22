import category1 from "../../assets/images/categories/cat-1.jpg";
import category2 from "../../assets/images/categories/cat-2.jpg";
import category3 from "../../assets/images/categories/cat-3.jpg";
import category4 from "../../assets/images/categories/cat-4.jpg";
import category5 from "../../assets/images/categories/cat-5.jpg";
import category6 from "../../assets/images/categories/cat-6.jpg";

export const Categories = () => {
  const category = [
    { img: category1, name: "Men's Dress" },
    { img: category2, name: "Women's Dress" },
    { img: category3, name: "Baby's Dress" },
    { img: category4, name: "Accessories" },
    { img: category5, name: "Bags" },
    { img: category6, name: "Shoes" },
  ];
  return (
    <div className="categories">
      {category.map((item) => {
        return (
          <div className="categories-card">
            <h4>15 Products</h4>
            <div>
              <img src={item.img} />
            </div>
            <h3>{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
};
