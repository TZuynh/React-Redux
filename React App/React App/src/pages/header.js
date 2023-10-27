import { NavLink } from "react-router-dom";

function Header()
{
    return(
    <header>
        <form className="search_header">
        <div className="main_option">
            <img className="logo" src="/ADIDAS.jpg"/>
            <input className="timkiem" type="search" name="gsearch" placeholder="Nhập tên sản phẩm"/>
            <button className="button_timkiem">Tìm Kiếm</button>
        </div>
       
        </form>
        <div className="menu">
            <span className="link">
                <NavLink to="/" className="home">Home</NavLink>
                <NavLink to="/Newspage" className="newspage">NewsPage</NavLink>
                <NavLink to="/Product" className="product">Product</NavLink>
                <NavLink to="#" className="blog">Blog</NavLink>
                <NavLink to="#" className="contact">Contact</NavLink>
           </span>
        </div>
        <p className="login"><NavLink to="/Register" className="register-form">Đăng Ký</NavLink>/<NavLink to="/Login" className="login-form">Đăng nhập</NavLink></p>

    </header>
    );
}
export default Header;