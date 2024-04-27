import { Link } from 'react-router-dom';
import Banner from './Banner';

const CareersComponent = () => {
    return (
        <div id="careers-component">
            <Banner />
            <div className='flex flex-col justify-center items-center text-center md:px-28 mt-20 text-[24px] px-5 '>
                <div className="text-left md:text-center">
                    <p>
                        Dive into a world of abundant professional opportunities
                        at our company, where we pride ourselves on fostering a
                        dynamic and innovative environment. Our diverse array of
                        job and internship offerings provides a platform for you
                        to not only apply your skills but also to nurture and
                        enhance them. Joining our collaborative team means
                        immersing yourself in an atmosphere where creativity is
                        not just welcomed but celebrated as an essential driver
                        of success.
                    </p>
                </div>
                <br/>
                <div className="text-left md:text-center">
                    <p>
                        As we navigate the exciting trajectory of growth, we
                        extend a warm invitation for you to become an integral
                        part of our narrative. Your contributions matter, and
                        your journey with us is more than just a career—it's an
                        investment in your professional evolution. Embrace the
                        chance to shape your path alongside ours, and together,
                        let's chart the course for individual and collective
                        success within the dynamic fabric of our vibrant team.
                    </p>
                </div>
            </div>
            <div className='flex md:flex-row flex-col md:gap-16 gap-5 mt-20 justify-center items-center mb-20 w-full px-5'>
                <div className='bg-[#09618E] text-white px-5 py-3 md:w-[300px] text-center'>
                    <Link className="w-full md:w-auto">EXPLORE JOB OPPORTUNITIES</Link>
                </div>
                <div className='bg-[#09618E] text-white px-5 py-3  md:w-[300px] w-64 text-center'>
                    <Link className="w-full md:w-auto">EXPLORE INTERNSHIPS</Link>
                </div>
            </div>
        </div>
    );
};

export default CareersComponent;
