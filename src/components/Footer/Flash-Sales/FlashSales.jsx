import { useEffect } from 'react';
import Banner from './Banner';
import ProductsSales from './ProductsSales';

const FlashSales = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id="flash-sales-components">
            <Banner />
            <ProductsSales />
        </div>
    );
};

export default FlashSales;
