import Card from '../card';
import imagesList from './images';

const Paint = () => {
    return (
        <>
            <Card imagesList={imagesList} subCategory={'Paint'} />
        </>
    );
}

export default Paint;