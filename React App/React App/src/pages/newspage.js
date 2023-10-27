import {useEffect} from 'react';
import { useState } from "react";
import Header from './header';
import Banner from './banner';
import NewsPageMini from './mini_newspage';
import Footer from './footer';
function NewsPage(){
    const [data, setdata] = useState([]);
    useEffect(() =>{
        async function getDatFromAPI(){
            var response = await ('http://localhost:9000/newspage-data.php')
            var json = await response.json();
            console.log("KQ", json);
            setdata(json);
        }
        getDatFromAPI();
    }, []);
    const lstpage = data.map(function(item){
        return(
            <NewsPageMini namepage={item.namepage} lstpages={item.lstpages}/>
        );
    });
    return(
        <>
        <div className='main-newspage'>
            <Header/>
            <Banner/>
            {lstpage}
            <Footer/>
        </div>      
        </>
    );
}
export default NewsPage;