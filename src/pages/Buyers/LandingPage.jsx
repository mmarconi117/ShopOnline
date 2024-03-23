import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import { Link } from 'react-router-dom';
import Explore from '../../components/Explore/Explore';
import PopularItems from '../../components/PopularItems/PopularItems';
import BS_BeautyandPersonal from '../../components/BS_BeautyAndPersonal/BS_BeautyAndPersonal';
import BS_HomeAndOffice from '../../components/BS_HomeAndOffice/PopularItems';
import Hero from '../../assets/IMAGES/Landing page/shopNewYork.png';

const LandingPage = () => {
    const [showConfetti, setShowConfetti] = useState(false);

    const confettiConfig = {
        angle: 90,
        spread: 200,
        startVelocity: 150,
        elementCount: 5000,
        dragFriction: 0.10,
        duration: 3000,
        stagger: 3,
        width: '10px',
        height: '10px',
        colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
    };

    useEffect(() => {
        const confettiTimeout = setTimeout(() => {
            setShowConfetti(true);
        }, 0);

        return () => clearTimeout(confettiTimeout);
    }, []);

    return (
        <div className="bg-gray-100 relative">
            <div className="w-full min-[1512px]:px-3 min-[1450px]:pb-3 overflow-auto relative">
                <img src={Hero} alt="shop online New York" />
                <Confetti active={showConfetti} config={confettiConfig} style={{ position: 'absolute', left: 0, top: 0 }} />
            </div>
            <Explore />
            <div className="flex flex-col items-center min-[1512px]:items-center">
                <PopularItems />
                <BS_HomeAndOffice />
                <BS_BeautyandPersonal />
                {/* See More Link */}
                <div className="mt-4">
                    <Link to="/help" className="text-blue-600 hover:text-blue-800 transition duration-300">See more</Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
