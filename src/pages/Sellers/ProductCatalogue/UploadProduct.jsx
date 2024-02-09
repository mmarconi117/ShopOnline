import { useState } from "react";
import FileUpload from "../../../assets/ICONS/FileUpload.svg";
import LeftArrow from "../../../assets/ICONS/LeftArrow.svg";
import RightArrow from "../../../assets/ICONS/RightArrow.svg";
import { Link } from "react-router-dom";

import { SET_PRODUCT } from "../../../reducersAndActions/actions";
import { useSelector, useDispatch } from "react-redux";



function UploadProduct() {
  const [productData, setProductData] = useState({
    productName: '',
    description: '',
    type: '',
    brand: '',
    inventory: '',
    price: '',
  });

  const dispatch = useDispatch();
  
  const productDetails = useSelector((state) => state.productTestReducer.product);

  const productDataHandler = (e) => {
    e.preventDefault();
    dispatch({ type: SET_PRODUCT, payload: productData });
    console.log(productDetails);
  
  }
  return (
    <div className="self-center flex flex-col   px-8 ">
      <div className="flex flex-col  max-md:max-w-full">
        <form onSubmit={productDataHandler}>
        <div className="bg-white self-center flex w-full max-w-[1141px] flex-col  mt-7 px-12 rounded-3xl max-md:max-w-full max-md:pl-5 pb-5 ">
          <div className="flex  w-full justify-between gap-5  pr-9  max-md:max-w-full max-md:flex-wrap max-md:pr-5 max-md:justify-center mt-11 ">
            <div className="text-stone-950 justify-start text-xl font-medium leading-8  whitespace-nowrap ">
              Adding New Products
            </div>
            
            <div className="self-stretch flex  justify-end gap-5">

              <Link to="/sellers/ListOfProducts">
                <button
                  type="button"
                  className="shadow-sm text-zinc-700 text-center text-sm  whitespace-nowrap grow justify-center px-8 py-2 border-[0.75px] border-solid border-black max-md:px-5"
                >
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className="shadow-sm text-zinc-700 text-center text-sm  whitespace-nowrap justify-center px-8 py-2 border-[0.75px] border-solid border-black max-md:px-5"
              >
                Upload
              </button>
            </div>
          </div>
          
            <div className="gap-5 flex max-lg:flex-col max-lg:justify-center max-md:items-stretch max-md:gap-5 ">
              
                <div className="flex flex-col w-[28%] max-md:w-full max-md:ml-0 justify-center max-md:mt-9 ">
                  <label
                    htmlFor="dropzone-file"
                    className="bg-stone-300 flex w-[250px] max-w-full flex-col justify-center items-center px-16 py-12 max-md:px-5 cursor-pointer"
                  >
                    <img
                      loading="lazy"
                      src={FileUpload}
                      className="aspect-square object-contain object-center w-[109px] overflow-hidden  mt-6 mb-5"
                    />
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>

                  <div className=" w-[250px] max-w-full justify-center items-center self-stretch flex gap-3 mt-7 max-md:justify-center ">
                    <img
                      loading="lazy"
                      src={LeftArrow}
                      className="aspect-[1.07] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="bg-stone-300 self-stretch flex w-[61px] shrink-0 h-[61px] flex-col" />
                    <div className="bg-stone-300 self-stretch flex w-[62px] shrink-0 h-[61px] flex-col" />
                    <div className="bg-stone-300 self-stretch flex w-[61px] shrink-0 h-[61px] flex-col" />
                    <img
                      loading="lazy"
                      src={RightArrow}
                      className="aspect-[1.07] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
              
              <div className="flex flex-col items-stretch w-[72%] ml-8 max-md:w-full max-md:ml-0 ">
                <div className="items-stretch flex grow flex-col pt-2 max-md:max-w-full max-md:mt-9 ">
                  <div className="text-zinc-900 text-xl font-medium leading-8 whitespace-nowrap max-md:max-w-full">
                    Product Details
                  </div>
                  <div className="w-full items-stretch flex grow basis-[0%] flex-col mt-6">
                    <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                      Product name
                    </label>

                    <input 
                      type="text" 
                      className="w-full h-10 justify-between items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] self-stretch flex shrink-0 flex-col mt-2 border-solid max-md:max-w-full pl-5"
                      required
                      value={productData.productName}
                      onChange={(e) => setProductData({ ...productData, productName: e.target.value })} 
                    />
                  </div>
                  <div className="text-stone-950 text-[14px] font-semibold leading-6 whitespace-nowrap mt-5 max-md:max-w-full">
                    Description
                  </div>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full h-[216px] text-sm text-gray-900 rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)]"
                    required
                    value={productData.description}
                    onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                  ></textarea>
                  <div className="justify-between items-stretch self-stretch flex flex-col gap-5 mt-0 lg:flex-row max-md:max-w-full max-md:flex-wrap ">
                    <div className="w-full items-stretch flex grow basis-[0%] flex-col mt-6">
                      <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                        Type
                      </label>

                      <select 
                        className="justify-between items-center rounded borde flex gap-5 mt-2 px-4 py-3 border-solid text-zinc-500 text-xs font-semibold leading-4 my-auto"
                        required
                        value={productData.type}
                        onChange={(e) => setProductData({ ...productData, type: e.target.value })}
                      >
                        <option value="HomeAccessories">Home accessories</option>
                        <option value="MobileAccessories">Mobile accessories</option>
                        <option value="ComputerAccessories">Computer accessories</option>
                      </select>
                    </div>
                    <div className="w-full items-stretch flex grow basis-[0%] flex-col mt-6">
                    <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                      Brand
                    </label>

                      <select 
                        className="justify-between items-center rounded borde flex gap-5 mt-2 px-4 py-3 border-solid text-zinc-500 text-xs font-semibold leading-4 my-auto"
                        required
                        value={productData.brand}
                        onChange={(e) => setProductData({ ...productData, brand: e.target.value })}
                      >
                        <option value="">Select</option>
                        <option value="Apple">Apple</option>
                        <option value="Hp">HP</option>
                      </select>
                    </div>
                  </div>

                  <div className="justify-between items-stretch self-stretch flex flex-col gap-5 mt-0 lg:flex-row max-md:max-w-full max-md:flex-wrap ">
                    <div className="w-full items-stretch flex grow basis-[0%] flex-col mt-6">
                      <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                      Inventory start at
                      </label>

                      <input 
                        type="text" 
                        className="w-full h-10 justify-between items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] self-stretch flex shrink-0 flex-col mt-2 border-solid max-md:max-w-full pl-5"
                        required
                        value={productData.inventory}
                        onChange={(e) => setProductData({ ...productData, inventory: e.target.value })} 
                      />

                    </div>
                    <div className="w-full items-stretch flex grow basis-[0%] flex-col mt-6">
                    <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                    Price
                    </label>

                    <input 
                      type="text" 
                      className="w-full h-10 justify-between items-center rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)] self-stretch flex shrink-0 flex-col mt-2 border-solid max-md:max-w-full pl-5"
                      required
                      value={productData.price}
                      onChange={(e) => setProductData({ ...productData, price: e.target.value })} 
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
        </form>
      </div>
    </div>
  );
}

export default UploadProduct;

