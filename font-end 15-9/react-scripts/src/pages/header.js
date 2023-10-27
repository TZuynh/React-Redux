function Header()
{
    return(
    <header>
        <form className="search_header">
        <img className="img" src="/R.png"/>
        <input className="timkiem" type="search" name="gsearch" placeholder="Nhập tên sản phẩm"/>
        <button className="button_timkiem">Tìm Kiếm</button>
        </form>
        <p className="login"><a href="">Đăng Ký</a>/<a href="">Đăng nhập</a></p>
    </header>
    );
}
export default Header;