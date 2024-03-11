import Card from '../card';
import imagesList from './images';

const Tablets = () => {
    return (
        <>
            <Card imagesList={imagesList} subCategory={'Tablets'} isLast={true} />
        </>
    );
}

export default Tablets;