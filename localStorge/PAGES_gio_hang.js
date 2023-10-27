import { useEffect, useState } from 'react';

function GioHang(props) {

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

    const gioHangUI = () => {
        if (cartItems.length > 0) {
            return (
                <table border="1">
                    <tr>
                        <th>TÊN SẢN PHẨM</th>
                        <th>SỐ LƯỢNG</th>
                        <th></th>
                    </tr>
                    {
                        cartItems.map(function(item){
                            return (
                                <tr key={item.id}>
                                    <td>{item.ten}</td>
                                    <td>{item.so_luong}</td>
                                    <td><button onClick={() => xoaHandler(item.id)}>X</button></td>
                                </tr>
                            );
                        })
                    }
                </table>
            )
        }
        return <>Không có sản phẩm trong giỏ hàng</>
    }

    const datHangHandler = () => {
        localStorage.removeItem('cartItems');
        setCartItems([]);
    }

    return (
        <>
            {
            gioHangUI()
            }
            <p>
                <button onClick={datHangHandler}>Dat hang</button>
            </p>
        </>
    )
}


export default GioHang;