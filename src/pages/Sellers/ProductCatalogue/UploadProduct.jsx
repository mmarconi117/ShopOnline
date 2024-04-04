import { useEffect, useState } from "react";
import FileUpload from "../../../assets/ICONS/FileUpload.svg";
import LeftArrow from "../../../assets/ICONS/LeftArrow.svg";
import RightArrow from "../../../assets/ICONS/RightArrow.svg";
import { Link } from "react-router-dom";

import { UPLOAD_NEW_PRODUCT, UPLOAD_PRODUCT_IMAGES } from "../../../reducersAndActions/actions";
import { resetUploadedProductImages} from '../../../reducersAndActions/actions/UploadNewProduct'
import { useSelector, useDispatch } from "react-redux";



function UploadProduct() {
  const [productData, setProductData] = useState({
    productName: '',
    description: '',
    category: '',
    subCategory: '',
    inventory: '',
    price: '',
  });
  const dispatch = useDispatch();
  const uploadedProductData = useSelector((state) => state.uploadNewProductReducer.productData) || productData;
  const uploadedImages = useSelector((state) => state.uploadNewProductReducer.productImages)


  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files.length > 3 || uploadedImages.length > 2) {
      alert("You can only upload up to three images.");
      return;
    }
  
    const imagesArray = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onloadend = () => {
        imagesArray.push(reader.result);
        if (imagesArray.length === files.length) {
          dispatch({ type: UPLOAD_PRODUCT_IMAGES, payload: imagesArray });
        }
      };
      reader.readAsDataURL(files[i]); 
    }
  };

  const productDataHandler = (e) => {
    e.preventDefault();
    if(!uploadedImages){
      alert("Please upload images")
      return
    }
    dispatch({ type: UPLOAD_NEW_PRODUCT, payload: productData });
    alert("Product Added Successfully");
    setProductData({
      productName: '',
      description: '',
      category: '',
      subCategory: '',
      inventory: '',
      price: '',
    });
    dispatch(resetUploadedProductImages());
  }  

  return (
    <div className="self-center flex flex-col   px-8 ">
      <div className="flex flex-col  max-md:max-w-full">
        <form onSubmit={productDataHandler}>
          <div className="bg-white self-center flex w-full max-w-[1141px] flex-col  mt-7 px-12 rounded-3xl max-md:max-w-full max-md:pl-5 pb-5 mb-5 ">
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

            <div className="gap-5 flex max-lg:flex-col max-lg:justify-center max-md:items-stretch max-md:gap-5 max-lg:mt-5 ">

              <div className="flex flex-col w-[28%] max-md:w-full max-md:ml-0 justify-center max-md:mt-9 max-lg:ml-32 max-md:pl-24 ">
                <label
                  htmlFor="dropzone-file"
                  className="bg-stone-300 flex w-[250px] max-w-full flex-col justify-center items-center px-16 py-12 max-md:px-5 cursor-pointer"
                >
                  <img
                    loading="lazy"
                    src={FileUpload}
                    className="aspect-square object-contain object-center w-[109px] overflow-hidden  mt-6 mb-5"
                  />
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    multiple
                    onChange={handleImageUpload}
                  />
                </label>

                <div className=" w-[250px] max-w-full justify-center items-center self-stretch flex gap-3 mt-7 max-md:justify-center ">
                  <img
                    loading="lazy"
                    src={LeftArrow}
                    className="aspect-[1.07] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  
                  {
                    uploadedImages.length > 0 && uploadedImages.map((image, index) => (
                      <div key={index}  className="self-stretch flex w-[80px] shrink-0 h-[80px] flex-col">
                        <img
                        loading="lazy"
                        src={image}
                        className="aspect-square object-contain object-center overflow-hidden"
                      />
                      </div>
                      
                    ))
                  }
                  {
                    uploadedImages.length === 0 &&
                      <>
                        <div className="bg-stone-300 self-stretch flex w-[80px] shrink-0 h-[80px] flex-col" />
                        <div className="bg-stone-300 self-stretch flex w-[80px] shrink-0 h-[80px] flex-col" />
                        <div className="bg-stone-300 self-stretch flex w-[80px] shrink-0 h-[80px] flex-col" />
                      </>
                  }
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
                        Categories
                      </label>

                      <select
                        className="justify-between items-center rounded borde flex gap-5 mt-2 px-4 py-3 border-solid text-zinc-500 text-xs font-semibold leading-4 my-auto"
                        required
                        value={productData.category}
                        onChange={(e) => setProductData({ ...productData, category: e.target.value })}
                      >
                        <option value="">Select</option>
                        <option value="HomeAccessories">Home accessories</option>
                        <option value="MobileAccessories">Mobile accessories</option>
                        <option value="ComputerAccessories">Computer accessories</option>
                      </select>
                    </div>
                    <div className="w-full items-stretch flex grow basis-[0%] flex-col mt-6">
                      <label className="text-stone-600 text-[14px] font-semibold leading-4 whitespace-nowrap">
                        Subcategories
                      </label>

                      <select
                        className="justify-between items-center rounded borde flex gap-5 mt-2 px-4 py-3 border-solid text-zinc-500 text-xs font-semibold leading-4 my-auto"
                        required
                        value={productData.subCategory}
                        onChange={(e) => setProductData({ ...productData, subCategory: e.target.value })}
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
                        Number of inventory
                      </label>

                      <input
                        type="number"
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
                        type="number"
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

