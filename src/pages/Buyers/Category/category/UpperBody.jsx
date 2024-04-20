import axios from "axios";
import LowerRectangle from "../PhonesAndAccessories/UpperBody/LowerRectangle";

const subcategoryRes = axios.get(
  "https://sonnyny-be.onrender.com/subcategories"
);
const subcategory = subcategoryRes.data;
const categoryRes = axios.get("https://api.shoponlinenewyork.com/api/categories");
const category = categoryRes.data;

function UpperBody() {
  return (
    <div>
      <img
        src={category.category_banner}
        className="object-cover min-h-[184px] w-full"
      />
      <LowerRectangle />
      <div>
        <h1>{category.category_name}</h1>
        <nav>
          {subcategory.map((subcategories) => {
            return (
              <div key={subcategories.subcategoryId}>
                <h3>{subcategories.subcategory_name}</h3>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default UpperBody;
