import img from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-1.jpeg';
import img2 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-2.jpeg';
import img3 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-3.jpeg';
import img4 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-4.jpeg';
import img5 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-5.jpeg';
import img6 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-6.jpeg';
import img7 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-7.jpeg';
import img8 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-8.jpeg';
import img9 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-9.jpeg';
import img10 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-10.jpeg';
import img11 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-11.jpeg';
import img12 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-12.jpeg';
import img13 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-13.jpeg';
import img14 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-14.jpeg';
import img15 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-15.jpeg';
import img16 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-16.jpeg';
import img17 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-17.jpeg';
import img18 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-18.jpeg';
import img19 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-19.jpeg';
import img20 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-20.jpeg';
import img21 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-21.jpeg';
import img22 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-22.jpeg';
import img23 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-23.jpeg';
import img24 from '../../../assets/IMAGES/Footer/Flash-Sales/Rectangle-24.jpeg';

const ProductsSales = () => {
    const items = [
        {
            img: img,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img2,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img3,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img4,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img5,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img6,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img7,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img8,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img9,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img10,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img11,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img12,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img13,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img14,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img15,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img16,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img17,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img18,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img19,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img20,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img21,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img22,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img23,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
        {
            img: img24,
            description:
                'Lorem ipsum dolor sit amet,  dolor sit amet, consectetur',
            cost: 35,
        },
    ];

    const sales = items.map((item, index) => {
        return (
            <div key={index} className="my-10">
                <div className="product-sale-image-div">
                    <img src={item.img} alt="product image sale" />
                </div>
                <div>
                    <p>{item.description}</p>
                </div>
                <div className="flex">
                    <div className="mr-2">
                        <p>${item.cost}</p>
                    </div>
                    <div>
                        <p className="line-through">$70</p>
                    </div>
                </div>
                <div className="bg-red-600 w-36">
                    <p className="text-white p-1 text-center">FlASH SALE</p>
                </div>
            </div>
        );
    });
    return (
        <div id="products-sales-components" className="my-10">
            <di className="flex justify-between flex-wrap">{sales}</di>
        </div>
    );
};

export default ProductsSales;
