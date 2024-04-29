import img from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-1.jpeg";
import img2 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-2.jpeg";
import img3 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-3.jpeg";
import img4 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-4.jpeg";
import img5 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-5.jpeg";
import img6 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-6.jpeg";
import img7 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-7.jpeg";
import img8 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-8.jpeg";
import img9 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-9.jpeg";
import img10 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-10.jpeg";
import img11 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-11.jpeg";
import img12 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-12.jpeg";
import img13 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-13.jpeg";
import img14 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-14.jpeg";
import img15 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-15.jpeg";
import img16 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-16.jpeg";
import img17 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-17.jpeg";
import img18 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-18.jpeg";
import img19 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-19.jpeg";
import img20 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-20.jpeg";
import img21 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-21.jpeg";
import img22 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-22.jpeg";
import img23 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-23.jpeg";
import img24 from "../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-24.jpeg";
import leftArrow from "../../../assets/ICONS/LeftArrow.svg";
import rightArrow from "../../../assets/ICONS/RightArrow.svg";

const ProductsSales = () => {
  const featuredItems = [
    {
      img: img20,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
      name: "Shoes",
    },
    {
      img: img17,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
      name: "Bags",
    },
    {
      img: img18,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
      name: "Watches",
    },
    {
      img: img8,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
      name: "Toys",
    },
  ];

  const items = [
    {
      img: img,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img2,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img3,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img4,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img5,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img6,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img7,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img8,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img9,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img10,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img11,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img12,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img13,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img14,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img15,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img16,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img17,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img18,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img19,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img20,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img21,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img22,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img23,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
    {
      img: img24,
      description: "Lorem ipsum dolor sit amet,  dolor sit amet, consectetur",
      cost: 35,
    },
  ];

  const itemImages = featuredItems.map((itemImg, index) => {
    return (
      <div key={index} className="flex flex-col items-center">
        <img
          src={itemImg.img}
          alt={itemImg.description}
          className="rounded-full h-16 w-16 object-cover"
        />
        <p>{itemImg.name}</p>
      </div>
    );
  });

  const sales = items.map((item, index) => {
    return (
      <div
        key={index}
        className="  my-4 sm:my-5 bg-white flex flex-col rounded sm:rounded-none items-start justify-between gap-2 w-[49%] sm:w-48 p-2 pb-5"
      >
        <div className="product-sale-image-div">
          <img
            src={item.img}
            alt="product image sale"
            className="rounded h-48 w-48 object-cover"
          />
        </div>
        <div>
          <p className="text-sm">{item.description}</p>
        </div>
        <div className="flex">
          <div className="mr-2">
            <p className="text-red-500">${item.cost}</p>
          </div>
          <div>
            <p className="line-through text-gray-500">$70</p>
          </div>
        </div>
        <div className="bg-red-600">
          <p className="text-white  px-2 text-center text-xs">FLASH SALE</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="flex sm:hidden flex-col  mt-5">
        <div className="bg-gray-300 flex p-3  justify-between">
          <div>
            <p>1-24 of over 2000 results</p>
          </div>
          <div className="text-blue-500 border-blue-500 border-2 rounded ">
            <select className="outline-none p-1  ">
              <option value="newest">Newest</option>
              <option value="popular">Popular</option>
              <option value="trending">Trending</option>
            </select>
          </div>
        </div>
        <div className="itemImages flex justify-between gap-1 px-3 py-5">
          {itemImages}
        </div>
      </div>
      <div
        id="products-sales-components"
        className=" my-4 sm:my-10 px-3 sm:px-6"
      >
        {/* Items  */}
        <div className="flex justify-between flex-wrap gap-1">{sales}</div>
        {/* Pagination   */}
        <div className="flex sm:hidden justify-between mt-4 font-semibold ">
          <div>
            <button className="flex items-center text-blue-400 hover:text-blue-950">
              <img src={leftArrow} className="h-5 w-5" alt="left arrow" />{" "}
              Previous
            </button>
          </div>
          <div className="flex gap-3 text-gray-500">
            <button className="bg-blue-700 rounded-full text-white h-6 w-6 hover:text-blue-950">
              1
            </button>

            <button className="hover:text-blue-950">2</button>
            <button className="hover:text-blue-950">3</button>
            <button className="hover:text-blue-950">4</button>
            <button className="hover:text-blue-950">5...</button>
          </div>
          <div>
            <button className="flex items-center text-blue-700 hover:text-blue-950 ">
              Next
              <img src={rightArrow} className="h-5 w-5 " alt="right arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSales;
