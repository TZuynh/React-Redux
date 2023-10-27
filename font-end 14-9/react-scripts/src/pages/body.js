function Body()
{
    return(
    <body>
    <img className="banner" src="/supreme.png"/>
    <div className="loaisp">
        <p className="loaisanpham"> Loại sản phẩm </p>
        <div className="sanpham">
            <table border="1">
                <img src="/R.png/"/>
                <p className="tensp">Tên sản phẩm</p>
                <p className="gia">Giá: 100.000</p>
                <button className="chonmua">Chọn mua</button>  
            </table>
        </div>
    </div>
    </body>
    );
}
export default Body;