function SanPham(props){
    const lstPd = props.pd.map(function(item){
        return(
            <>
                <div className="border border-dark">
                    <img src={item.hinh_anh}/>
                    <p><span className="ten">{item.ten}</span></p>
                    <p><span className="gia">{item.gia}</span></p>
                    <button className="btn_mua">Chọn Mua</button>
                </div>
            </>
        );
    });
    return(
        <>
            <div className="title_pd">
            <span className="type_name h3">{props.typename}</span>
            </div>
            {lstPd}
        </>
    );
}
export default SanPham;