function ChiTietSanPham(props)
{
    return(
    <>
    <tbody>
        <div class="main-product-details">
        <div class="img-product-details">
            <img src={props.data.hinh_anh}/>
        </div>          
            <div class="info-product-details">
                    <span><h1>{props.data.ten_san_pham}</h1></span><br/>
                    <span className="font-price"><h2>{props.data.gia_ban} VND</h2></span><br/>
                    <span>Mô tả: {props.data.loai_san_pham.mo_ta}</span><br/>
                    <span>SIZE:</span>
                    <div class="btn-size">
                        <button class="btn-size-product">37</button>
                        <button class="btn-size-product">38</button>
                        <button class="btn-size-product">39</button>
                        <button class="btn-size-product">40</button>
                    </div>
                <div class="amount-product-details">
                    Số lượng:
                    <input type="number" value="1" className="size-product-sl"/>
                </div>

                <div class="btn-buyProduct">
                    <button  class="btn-buyNow">MUA NGAY</button>

                </div>
                <ul class="list-service">
                    <li><img class="dt-width-auto" src="//theme.hstatic.net/1000230642/1001036938/14/service_ic_1.png?v=4487" width="32" height="32"/>Cam kết chính hãng Biti's100%</li>
                    <li><img class="dt-width-auto" src="//theme.hstatic.net/1000230642/1001036938/14/service_ic_2.png?v=4487" width="32" height="32"/>Bảo hành 06 tháng (<a href="https://bitis.com.vn/pages/chinh-sach-bao-hanh">click xem chi tiết</a>)</li>
                    <li><img class="dt-width-auto" src="//theme.hstatic.net/1000230642/1001036938/14/service_ic_3.png?v=4487" width="32" height="32"/>Đổi size trong vòng 7 ngày (<a href="https://bitis.com.vn/pages/chinh-sach-doi-tra">click xem chi tiết</a>)</li>
                    <li><img class="dt-width-auto" src="//theme.hstatic.net/1000230642/1001036938/14/service_ic_4.png?v=4487" width="32" height="32"/>Đổi trả hàng trong vòng 7 ngày (<a href="https://bitis.com.vn/pages/chinh-sach-doi-tra">click xem chi tiết</a>)</li>
                    <li><img class="dt-width-auto" src="//theme.hstatic.net/1000230642/1001036938/14/service_ic_5.png?v=4487" width="32" height="32"/>Free ship đơn hàng 1.5 Triệu</li>
				    <li><img class="dt-width-auto" src="//theme.hstatic.net/1000230642/1001036938/14/service_ic_6.png?v=4487" width="32" height="32"/>Giao hàng 2h Grab khu vực HCM (8H00 - 11H00 và 14H00 - 16H00)</li>
								</ul>
                <div class="tilte-product-details">
                    <span>
                        Xin cam kết về chất lượng sản phẩm. Chúng tôi tuyệt đối không bán hàng fake,
                        hàng kém chất lượng. Nếu quý khách nhận thấy hàng lỗi hoặc không đúng như cam kết.
                        Chúng tôi sẽ tiến hành cho đổi trả và hoàn lại tiền 100%.
                    </span>
                </div>
            </div>
        </div>
    </tbody>
    </>
    );
}
export default ChiTietSanPham;