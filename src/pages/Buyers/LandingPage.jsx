
import Menu from '../../components/Menu/Menu';
import FashionSection from '../../components/Menu/FashionSection';
import Explore from '../../components/Explore/Explore';
import Welcome from '../../components/Menu/Welcome';
import EmptySpaceToBeFilledIn from '../../components/Menu/EmptySpaceToBeFilledIn';
import PopularItems from '../../components/PopularItems/PopularItems'; // Added PopularItems module
import BS_BeautyandPersonal from '../../components/BS_BeautyAndPersonal/BS_BeautyAndPersonal'
import BS_HomeAndOffice from '../../components/BS_HomeAndOffice/PopularItems';
import ProductDetails from "./Product-Details/ProductDetails";

const productDetailItemTest = {
    product: {
        id: 1,
        imgs: [
            {
                img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            },
            {
                img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            },
            {
                img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            },
            {
                img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            },
            {
                img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            },
            {
                img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            },
            {
                img: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            },
        ],
        colors: [
            {
                red: "red",
            },
            {
                blue: "blue",
            },
            {
                green: "green",
            },
        ],
        price: 178,
        discount: 20,
        description:
            "COSMO COS-DIS6502 24 in. Dishwasher in Fingerprint Resistant Stainless Steel with Stainless Steel Tub",
        ratings: 4.7,
        sold: 4788,
        reviews: 117,
    },
};

export default function LandingPage() {
    return (
        <div className="bg-gray-100">
            <div className=" flex w-full justify-center ml-3">
                <Menu />
                <div className="flex">
                    <div>
                        <FashionSection />
                        <EmptySpaceToBeFilledIn />
                        <ProductDetails product={productDetailItemTest} />
                    </div>
                    <Welcome />
                </div>
            </div>
            <Explore />
            <PopularItems />
            <BS_HomeAndOffice />
            <BS_BeautyandPersonal />
        </div>
    );
}