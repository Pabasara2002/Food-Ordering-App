import { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ searchQuery, setSearchQuery, setShowLogin }) => {
    const [menu,setMenu] = useState("home");
    const [showSearch, setShowSearch] = useState(false);
    const { getCartCount } = useContext(StoreContext);
    const navigate = useNavigate();
    const cartCount = getCartCount();
    const handleSearchToggle = () => {
        setShowSearch((prev) => !prev);
        navigate("/");
        setTimeout(() => {
            document.querySelector(".navbar-search-input")?.focus();
        }, 0);
    };

  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt="Tomato" className="logo" /></Link>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}><NavLink to="/">home</NavLink></li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}><a href="/#explore-menu">menu</a></li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}><a href="/#app-download">mobile app</a></li>
        <li onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}><NavLink to="/contact">contact us</NavLink></li>
        </ul>
        <div className="navbar-right">
            <div className={showSearch ? "navbar-search open" : "navbar-search"}>
                <button className="navbar-icon-button" onClick={handleSearchToggle} aria-label="Search menu">
                    <img src={assets.search_icon} alt="" />
                </button>
                {showSearch && (
                    <input
                        className="navbar-search-input"
                        type="search"
                        value={searchQuery}
                        onChange={(event)=>setSearchQuery(event.target.value)}
                        placeholder="Search food"
                        aria-label="Search food"
                    />
                )}
            </div>
            <div className="navbar-search-icon">
            <Link to="/cart"><img src={assets.basket_icon} alt="Cart"  /></Link>
            {cartCount > 0 && <div className="dot">{cartCount}</div>}
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
