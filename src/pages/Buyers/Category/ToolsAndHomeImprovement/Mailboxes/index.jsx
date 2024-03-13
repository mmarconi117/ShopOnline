import Card from '../card';
import imagesList from './images';

const Mailboxes = () => {
    return (
        <>
            <Card imagesList={imagesList} subCategory={'Mailboxes'} />
        </>
    );
}

export default Mailboxes;