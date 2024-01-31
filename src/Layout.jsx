/* 
This file was created to ensure that the Header and Footer persisted across all pages in the app.
If you look at App.jsx you will now see that it is wrapped in it's entirety with the Layout tag imported.
This removes the need to import the Header and Footer with every page.
The children prop has been used to collect the needed iformation of each route to render properly
*/

import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <div className='bg-[#F5F5F9]'>
        <Header />
            <Outlet />
        <Footer />
    </div>
    );
};


export default Layout;

