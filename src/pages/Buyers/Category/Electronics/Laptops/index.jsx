import Card from '../card';
import imagesList from './images';

const Laptops = () => {
    return (
        <>
            <Card imagesList={imagesList} subCategory={'Laptops'} />
        </>
    );
}

export default Laptops;