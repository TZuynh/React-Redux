function NewsPageMini(props){
    const lstNP = props.lstpages.map(function(item){
        return(
            <>
            <div className="lstnewpage">
                <div className="border border-dark">
                    <img src={item.hinh_anh} className="hinh_anh"/>
                    <p><span className="mota">{item.mota}</span></p>
                </div>
            </div>         
            </>
        );
    });
    return(
        <>
        <div className="title_pd">
            <span className="type_name h3">{props.namepage}</span>
         </div>
        <div className="wrapper-product">
            {lstNP}
        </div>  
        </>
    );
}
export default NewsPageMini;