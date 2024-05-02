import { NavLink } from 'react-router-dom';

const SideBar = ({ setCurrentHash }) => {
    const items = [
        {
            title: "Privacy Policy",
            link: "/policies",
            hash: ""
        },
        {
            title: "Shipping and delivery policy",
            link: "/policies",
            hash: "#shinpping&delivery"
        },
        {
            title: "Returns and Exchanges policy",
            link: "/policies",
            hash: "#return&exchanges"
        },
        {
            title: "Returns and refund policy",
            link: "/policies",
            hash: "#returns&refund"
        },
        {
            title: "Cancellation",
            link: "/policies",
            hash: "#cancellation"
        },
        {
            title: "Payment and Security Policy",
            link: "/policies",
            hash: "#payment&security"
        }
    ];
    const updateCurrentHash = (hash) => {
        setCurrentHash(hash);
    };
    const navItems = items.map((item, index) => {
        return (
            <li
                key={index}
                className=""
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
                    className="block w-full py-12 pr-16 h-32 pl-4 text-left text-xl"
                >
                    {item.title}
                </NavLink>
            </li>
        );
    });
    return (
        <div id="faq-sidebar-nav-component divide-y divide-solid" className="w-1/5 flex flex-col justify-center mb-12 hidden md:block ">
        <nav className="w-full">
            <ul className="divide-y divide-solid text-center  mt-0">
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
    padding: '3rem 1rem',
    fontSize: '18px' ,
};

export default SideBar;
