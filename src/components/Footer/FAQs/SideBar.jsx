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
            <li
                key={index}
                className="p-2"
                id={item.link}
            >
                <NavLink
                    onClick={() => {
                        updateCurrentHash(item.hash);
                    }}
                    to={item.hash}
                    style={({ isActive }) => {
                        isActive = window.location.hash === item.hash;
                        return isActive ? activeLink : {};
                    }}
                >
                    {item.title}
                </NavLink>
            </li>
        );
    });
    return (
        <div id="faq-sidebar-nav-component" className="w-1/6">
            <nav className="w-full">
                <ul className="">{navItems}</ul>
            </nav>
        </div>
    );
};

const activeLink = {
    backgroundColor: 'red',
    fontWeight: 'bold',
    color: 'black',
};

export default SideBar;
