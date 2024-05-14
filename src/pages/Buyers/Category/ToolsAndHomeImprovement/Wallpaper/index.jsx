import Card from '../card';
import imagesList from './images';

const Wallpaper = () => {
    return (
        <>
            <Card imagesList={imagesList} subCategory={'Wallpaper'} isLast={false} />
        </>
    );
}

export default Wallpaper;