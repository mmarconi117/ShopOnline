
import { useState, useEffect } from "react";
import SearchIcons from "../../../assets/ICONS/SearchIcons.svg";
import ArrowDown from "../../../assets/ICONS/ArrowDown.svg";
import Filter from "../../../assets/ICONS/Filter.svg";
import Sort from "../../../assets/ICONS/Sort.svg";
import { Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { searchProduct, sortCatalogue } from "../../../reducersAndActions/actions/productCatalogue";

function ListOfProducts() {
  const [products, setProducts] = useState([]);
  const productsList = useSelector((state) => state.productCatalogueReducer.catalogue);
  const filtered = useSelector((state) => state.productCatalogueReducer.filtered);
  const revert = useSelector((state) => state.productCatalogueReducer.revert);
  const dispatch = useDispatch();

  useEffect(() => {
      if (filtered.length > 0) {
          setProducts(filtered);
      } else {
          setProducts(productsList);
      }
  }, [dispatch, filtered]);

  const search = (input) => {
      dispatch(searchProduct(input));
  };

  const sort = () => {
      dispatch(sortCatalogue(!revert));
  };

  const listOfProducts = products.map((product, index) => {
      return (
          <tr key={index}>
              <td className="h-[72px] border-r border-black justify-center text-center">
                  {/* Fetching immage here */}
                  <div className="bg-gray-400 w-[80px] h-[40px] mx-auto"></div>
              </td>
              <td className="border-r border-black text-center p-1">
                  {product.id}
                  {/* {product.id} */}
              </td>
              <td className="border-r border-black text-center p-1">
                  <Link to={`/ProductDetail/${product.id}`}>
                      {product.brand}
                      {/* {product.title} */}
                  </Link>
              </td>
              <td className="border-r border-black text-center min-w-[100px] p-2">
                  {product.type}
                  {/* {product.category} */}
              </td>
              <td className="border-r border-black text-center p-1">
                  {product.price}
                  {/* {product.price} */}
              </td>
              <td className="border-r border-black p-1 min-w-[100px]">
                  <div className="w-[25px] h-[25px] mx-auto">
                      <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="bg-green-600 rounded text-white hover:bg-green-700 w-[25px] h-[25px]"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                          />
                      </svg>
                      {/* The svgs below are commented out so they can easily be accessed in the future */}
                      {/* <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="bg-red-600 rounded text-white ml-5 w-[25px] h-[25px] hover:bg-red-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>

                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="bg-yellow-600 rounded text-white ml-5 w-[25px] h-[25px] hover:bg-yellow-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                        />
                      </svg> */}
                  </div>
              </td>
          </tr>
      );
  });

  const mobileListOfProducts = products.map((product, index) => {
      return (
          <div
              key={index}
              className="flex flex-col"
          >
              <div className="bg-stone-400 h-[100px] flex justify-center items-center rounded-t-md">
                  {/* Fetching immage here */}
                  <div className="bg-blue-600 w-[160px] h-[80px]"></div>
              </div>
              <div className="flex justify-between items-center bg-stone-300 py-2 px-8">
                  <div>Product ID:</div>
                  <div>{product.id}</div>
                  {/* {product.id} */}
              </div>
              <div className="flex justify-between items-center bg-stone-400 py-2 px-8">
                  <div>Title:</div>
                  <Link to={`/ProductDetail/${product.id}`}>
                      {product.brand}
                      {/* {product.title} */}
                  </Link>
              </div>
              <div className="flex justify-between items-center bg-stone-300 py-2 px-8">
                  <div>Type:</div>
                  <div>{product.type}</div>
                  {/* {product.category} */}
              </div>
              <div className="flex justify-between items-center bg-stone-400 py-2 px-8">
                  <div>Price:</div>
                  <div>{product.price}</div>
                  {/* {product.price} */}
              </div>
              <div className="flex justify-start items-center bg-stone-300 py-2 px-8 rounded-b-md">
                  <div className="w-[25px] h-[25px] mx-auto">
                      <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="bg-green-600 rounded text-white hover:bg-green-700 w-[25px] h-[25px]"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                          />
                      </svg>
                      {/* The svgs below are commented out so they can easily be accessed in the future */}
                      {/* <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="bg-red-600 rounded text-white w-[25px] h-[25px] hover:bg-red-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>

                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="bg-yellow-600 rounded text-white ml-5 w-[25px] h-[25px] hover:bg-yellow-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                        />
                      </svg> */}
                  </div>
              </div>
          </div>
      );
  });

  return (
      <div className="flex max-w-full flex-col items-stretch py-5 px-5 sm:pb-20 sm:px-10 gap-10 sm:gap-5">
          <div className="flex flex-col justify-start items-center gap-5 sm:flex-row sm:justify-between sm:gap-0 sm:items-start max-w-full">
              <div className="text-stone-950 text-[20px] font-medium leading-8 whitespace-nowrap">
                  All Product
              </div>
              <Link to="/sellers/UploadProduct">
                  <button
                      type="button"
                      className="bg-[#EEC643] rounded-md shadow-lg text-zinc-700 text-center text-sm font-semibold  whitespace-nowrap justify-center px-8 py-2 max-md:px-5"
                  >
                      Add Product
                  </button>
              </Link>
          </div>
          <div className="flex flex-col justify-start items-center gap-5 sm:gap-0 sm:flex-row sm:items-stretch sm:justify-between  max-w-full ">
              <div className="relative shrink">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <img
                          loading="lazy"
                          src={SearchIcons}
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                  </div>
                  <input
                      type="search"
                      onChange={(e) => search(e.target.value)}
                      className="block w-full p-4 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50  0 dark:placeholder-gray-400 "
                      placeholder="Search by ..."
                  />
              </div>
              <div className="items-stretch self-center flex justify-between gap-5 md:gap-2 lg:gap-5 my-auto shrink-0">
                  <div className="flex justify-between gap-2 items-start">
                      <img
                          loading="lazy"
                          src={ArrowDown}
                          className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-stone-950 text-xs font-semibold leading-4 self-stretch grow whitespace-nowrap">
                          ALL
                      </div>
                  </div>
                  <div className="flex items-center gap-2 self-start">
                      <div className="text-zinc-800 text-right text-xs leading-4 grow whitespace-nowrap my-auto">
                          Filter:
                      </div>
                      <img
                          loading="lazy"
                          src={Filter}
                          className="aspect-[0.94] object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                  </div>
                  <div className="items-stretch flex gap-2 max-md:justify-center">
                      <img
                          loading="lazy"
                          src={ArrowDown}
                          className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-stone-950 text-sm font-semibold leading-4 self-center">
                          A-Z
                      </div>
                      <button
                          type="button"
                          onClick={() => sort()}
                          className="text-zinc-800 text-xs leading-4 self-center my-auto"
                      >
                          SORT:
                      </button>
                      <img
                          loading="lazy"
                          src={Sort}
                          className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                  </div>
              </div>
          </div>
          {/* Data table */}
          <div className="hidden lg:flex flex-col items-stretch py-3 rounded-none max-w-full">
              <div className="overflow-auto pb-4">
                  <table className="w-full border-collapse min-w-[600px]">
                      <thead>
                          <tr className="">
                              <th className="w-1/6 p-2 sm:p-4 "></th>
                              <th className="w-1/6 p-2 sm:p-4 text-zinc-700 text-sm leading-6 grow whitespace-nowrap my-auto">
                                  PRODUCT ID
                              </th>
                              <th className="w-1/6 p-2 sm:p-4 text-zinc-700 text-sm leading-6 self-center grow whitespace-nowrap my-auto">
                                  PRODUCT NAME
                              </th>
                              <th className="w-1/6 p-2 sm:p-4 text-zinc-700 text-sm leading-6 self-center grow whitespace-nowrap my-auto">
                                  TYPE
                              </th>
                              <th className="w-1/6 p-2 sm:p-4 text-zinc-700 text-sm leading-6 self-center grow whitespace-nowrap my-auto">
                                  INVENTORY
                              </th>
                              <th className="w-1/6"></th>
                          </tr>
                      </thead>
                      <tbody className="bg-white border border-black">
                          {products.length === 0 ? (
                              <tr className="w-full h-[200px]">
                                  <td
                                      colSpan="6"
                                      className=" justify-center text-center"
                                  >
                                      no product found add product here !!
                                      <div className=" mt-2 items-end max-md:px-5 ">
                                          <Link to="/sellers/UploadProduct">
                                              <button
                                                  type="button"
                                                  className="shadow-sm bg-zinc-100 text-zinc-700 text-center text-sm font-semibold  whitespace-nowrap grow justify-center px-8 py-2 border-[0.75px] border-solid border-black max-md:px-5"
                                              >
                                                  Add Product
                                              </button>
                                          </Link>
                                      </div>
                                  </td>
                              </tr>
                          ) : (
                              listOfProducts
                          )}
                      </tbody>
                  </table>
              </div>

              {/* Pagination */}
              <div className="flex self-start items-center justify-between mt-4 gap-3 sm:gap-5">
                  <div className="cursor-pointer text-zinc-800 text-sm leading-5 opacity-50">
                      Prev
                  </div>
                  {Array.from({ length: 1 }).map((_, i) => (
                      <div
                          key={i}
                          className={`cursor-pointer p-2 text-center text-base leading-6 whitespace-nowrap bg-[#EEC643] self-stretch aspect-square justify-center items-center h-10 rounded-xl`}
                      >
                          1
                      </div>
                  ))}
                  <div
                      className={`cursor-pointer text-zinc-800 text-sm leading-5 self-center my-auto opacity-50`}
                  >
                      Next
                  </div>
              </div>
          </div>
          {/* Mobile version */}
          <div className="flex lg:hidden flex-col justify-start gap-5 items-stretch">
              {products.length === 0 ? (
                  <div className="h-[200px] flex flex-col justify-center items-center bg-stone-400 gap-3">
                      <div>No product found add product here !!</div>
                      <Link to="/sellers/UploadProduct">
                          <button
                              type="button"
                              className="shadow-sm bg-gray-200 text-zinc-700 text-center text-sm font-semibold  whitespace-nowrap px-8 py-2 border-[0.75px] border-solid border-black rounded-md max-md:px-5"
                          >
                              Add Product
                          </button>
                      </Link>
                  </div>
              ) : (
                  mobileListOfProducts
              )}
          </div>
      </div>
  );
}

export default ListOfProducts;

