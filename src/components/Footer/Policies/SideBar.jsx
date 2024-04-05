import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const items = [
        {
            title: 'Privacy Policy',
            link: '/policies',
            hash: '',
        },
        {
            title: 'Shinpping and delivery policy',
            link: '/policies',
            hash: '#shinpping&delivery',
        },
        {
            title: 'Returns and Exchanges policy',
            link: '/policies',
            hash: '#return&exchanges',
        },
        {
            title: 'Returns and refund policy',
            link: '/policies',
            hash: '#returns&refund',
        },
        {
            title: 'Cancellation',
            link: '/policies',
            hash: '#cancellation',
        },
        {
            title: 'Payment and Security Policy',
            link: '/policies',
            hash: '#payment&security',
        },
    ];
    const navItems = items.map((item, index) => {
        return (
            <li key={index} className="p-2" id={item.link}>
                <NavLink
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
        <div id="sidebar-component">
            <nav className="w-full">
                <ul>{navItems}</ul>
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
