import Card from '../card';
import imagesList from './images';

const Computers = () => {
    return (
        <>
            <Card imagesList={imagesList} subCategory={'Computers'} />
        </>
    );
}

export default Computers;