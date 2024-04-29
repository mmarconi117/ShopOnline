import { NavLink } from 'react-router-dom';

const SideBar = ({ setCurrentHash }) => {
    const items = [
        {
            title: 'Ordering and payments',
            link: '/faqs',
            hash: '',
        },
        {
            title: 'Shipping and delivery',
            link: '/faqs',
            hash: '#shipping',
        },
        {
            title: 'Returns and Exchanges',
            link: '/faqs',
            hash: '#returns',
        },
        {
            title: 'Account and Login Issues',
            link: '/faqs',
            hash: '#accountissues',
        },
        {
            title: 'Promotion and Discounts',
            link: '/faqs',
            hash: '#promotions',
        },
        {
            title: 'Checkout',
            link: '/faqs',
            hash: '#checkout',
        },
        {
            title: 'Gift cards',
            link: '/faqs',
            hash: '#giftcards',
        },
        {
            title: 'Technical support',
            link: '/faqs',
            hash: '#technicalsupport',
        },
        {
            title: 'Product Information',
            link: '/faqs',
            hash: '#productinformation',
        },
    ];

    const updateCurrentHash = (hash) => {
        setCurrentHash(hash);
    };

    const navItems = items.map((item, index) => {
        return (
            <li key={index} className="" id={item.link}>
                <NavLink
                    onClick={() => {
                        updateCurrentHash(item.hash);
                    }}
                    to={item.hash}
                    style={({ isActive }) => {
                        isActive = window.location.hash === item.hash;
                        return isActive ? activeLink : {};
                    }}
                    className="block w-full py-5 pr-16 pl-4 h-16 text-left overflow-hidden"
                >
                    {item.title}
                </NavLink>
            </li>
        );
    });

    const lastIndex = items.length - 1;
    const firstItem = items[0];
    const lastItem = items[lastIndex];

    return (
        <div id="faq-sidebar-nav-component divide-y divide-solid" className="w-1/5 flex flex-col justify-center mb-12 hidden md:block">
            <nav className="w-full">
                <ul className="divide-y divide-solid m mt-0">
                    <li className="py-0">
                    </li>
                    {navItems}
                    <li className="py-0">
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const activeLink = {
    backgroundColor: 'white',
    fontWeight: 'bold',
    color: 'black',
    padding: '1.3rem 1.6rem',
    fontSize: '16px' ,
};

export default SideBar;
