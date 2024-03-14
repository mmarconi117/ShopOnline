import Card from '../card';
import imagesList from './images';

const Electrical = () => {
    return (
        <>
            <Card imagesList={imagesList} subCategory={'Electrical'} />
        </>
    );
}

export default Electrical;