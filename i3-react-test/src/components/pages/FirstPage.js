//rfce
import React,{useRef,useEffect,useState} from 'react';


import './FirstPage.scss'
import { useFetch } from '../useFetch';
import ImageSlider from '../ImageSlider';
import {SliderData} from '../SliderData';


const FirstPage=() => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 961);

useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 961;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);

    const isComponentMounted = useRef(true);

    const { data, loading, error } = useFetch(
      "http://localhost:8000/data",
      isComponentMounted,
      []
    );
    
      return (
        <div>
         
            
            {loading ? (
        <div> Loading.....</div>
      ) : (
        data.map((data) => (
            <div className={`${isMobile?"content-mobile":"content"}`} key={data.id}>
              <ImageSlider slides={SliderData} />
         <div className="child1">
              <img src={data.img1} alt={data.userId} width={data.imgWidth3} height={data.imgHeight3} />
              <img src={data.img1} alt={data.userId} width={data.imgWidth3} height={data.imgHeight3} />
              <img src={data.img1} alt={data.userId} width={data.imgWidth3} height={data.imgHeight3} />
              </div>
              
              </div>
             
           
        ))
       
      ) }
        
    </div>
    );
};

export default FirstPage
