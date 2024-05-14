import Card from '../card';
import imagesList from './images';

const OutdoorTools = () => {
    return (
        <>
            <Card imagesList={imagesList} subCategory={'Outdoor Tools'} isLast={true}/>
        </>
    );
}

export default OutdoorTools;