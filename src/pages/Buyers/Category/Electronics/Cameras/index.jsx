import Card from '../card';
import imagesList from './images';

const Cameras = () => {
    return (
        <>
            <Card imagesList={imagesList} subCategory={'Cameras'} />
        </>
    );
}

export default Cameras;