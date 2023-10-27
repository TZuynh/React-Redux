import { NavLink} from "react-router-dom";
function SanPham(props){
    const chonMuaHandler = () => { 
        var sanPham = {id: props.data.id, anh:props.data.hinh_anh, ten: props.data.ten_san_pham, gia: props.data.gia_ban, mota: props.data.mota, so_luong: 1};
        var cartItems = localStorage.getItem('cartItems');
        if (cartItems == null) {
            cartItems = [sanPham];
        } else {
            cartItems = JSON.parse(cartItems);
            var i=0;
            for(; i<cartItems.length; i++) {
                if (cartItems[i].id === sanPham.id) {
                    cartItems[i].so_luong += sanPham.so_luong;
                    break;
                }
            }
            if (i === cartItems.length) {
                cartItems.push(sanPham);
            }
            
        } 
    console.log(cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
        return(
            <>
            <div className="lstSP">
                <div className="border border-dark">
                    <NavLink>
                        <img src={props.data.hinh_anh} className="hinh_anh"/>
                    </NavLink>
                    <p><span className="ten">Tên: {props.data.ten_san_pham}</span></p>
                    <p><span className="gia">Giá: {props.data.gia_ban}</span></p>             
                   <NavLink to="/GioHang"> <button className="btn_mua" onClick={chonMuaHandler}>Chọn Mua</button></NavLink>
                </div>
            </div>         
            </>
        );
        
}
export default SanPham;