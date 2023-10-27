import  {NavLink} from  'react-router-dom';
import { useEffect, useState } from 'react';
import Header from "../pages/header";
import Footer from "../pages/footer";
function GioHang(){
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        var items = localStorage.getItem('cartItems');
        console.log(items);
        if (items != null) {
            setCartItems(JSON.parse(items));
        }
    }, []);
    

    const xoaHandler = (id) => {
        console.log('Xoa', id)
        var items = cartItems.filter((item) => item.id !== id);
        setCartItems(items);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    
    
let dsgiohang = cartItems.map(function(item){
    return (
            <div class="img-product">
                <div class="info-product">
                    <img class="imgsp" src={item.anh}/>
                    <br/>
                    <span>Tên:{item.ten}</span>
                    <br/>
                    <span>Số lượng:{item.so_luong}</span>
                    <br/>
                    <span>Giá:{item.gia}</span>
                    <br/>
                    <span>Thành tiền: {item.gia * Number(item.so_luong)}</span>
                    <br/>
                    <button class="btn-edit">Edit</button>
                    <button  class="btn-delete" onClick={() => xoaHandler(item.id)}>Delete</button>
                </div>
            </div>
    );
})
    const gioHangUI = () => 
    {
        if (cartItems.length > 0) 
        {
            return (
            <>
            <div class="main-gio_hang">
                <h1 class="font-product">Giỏ Hàng Sản Phẩm</h1>
                <div class="header-product"></div>
                {dsgiohang}
                 <div class="total-right-btn">
                    <button class="btn-rebuy">
                        <NavLink class="btn-rebuy" to="/">Tiếp Tục Mua Hàng</NavLink>
                    </button>
                    <p>
                        <button class="btn-thanhtoan" onClick={datHangHandler}>Thanh Toán</button>
                    </p>
                </div>   
            </div>
            </>
            )
        }
        else{
            return(
               <p>Không có dữ liệu</p> 
            )
        }
    }

    const datHangHandler = () => {
        localStorage.removeItem('cartItems');
        setCartItems([]);
    }

    return(
        <>
        <Header/>
            {
            gioHangUI()
            }
        <Footer/>
        </>

       
    );
}
export default GioHang;
