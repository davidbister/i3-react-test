//rfce
import React,{useRef} from 'react';
import'./SecondPage.scss';

import { useFetch } from '../useFetch';

const SecondPage=()=> {
    const isComponentMounted = useRef(true);

    const { data, loading, error } = useFetch(
      "http://localhost:8000/data",
      isComponentMounted,
      []
    );

    
    let imgSmall="imgsmall";
    let imgSmall3="imgsmall3";
    let imgBig="imgbig";
    let wrapper="wrapper";
    let box1="box1";
    let box2="box2";
    let box3="box3";
    let box4="box4";

    return (
        <>
              {loading ? (
        <div>Loading data...</div>
      ) : (
        data.map((data) => (
            <div className={wrapper} key={data.id} >

              <div className={box1}>{data.title}</div>
              <div className={box2}> {data.body}</div>
             
             <div className={box3}>
                 
                  <img className={imgSmall} src={data.img1} alt={data.userId} width={data.imgWidth1} height={data.imgHeight1} 
             />
             <img className={imgSmall} src={data.img1} alt={data.userId} width={data.imgWidth1} height={data.imgHeight1} 
             /><img className={imgSmall3} src={data.img1} alt={data.userId} width={data.imgWidth1} height={data.imgHeight1} 
             /></div>
             <div className={box4}>
              <img clasName={imgBig} src={data.img2} alt={data.userId} width={data.imgWidth} height={data.imgHeight} />

              </div>



            </div>
        ))


      )}





        </>
    );
};

export default SecondPage
