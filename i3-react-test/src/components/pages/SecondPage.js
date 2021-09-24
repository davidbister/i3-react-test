//rfce
import React,{useRef} from 'react';
import '../../App.scss';
import { useFetch } from '../useFetch';

const SecondPage=()=> {
    const isComponentMounted = useRef(true);

    const { data, loading, error } = useFetch(
      "http://localhost:8000/data",
      isComponentMounted,
      []
    );
    
    let divNameSp="SecondPage";
    let pNameSp="pSecondPage";

    return (
        <>
              {loading ? (
        <div>Loading data...</div>
      ) : (
        data.map((data) => (
            <div key={data.id} className={divNameSp}>
              <h3>{data.title}</h3>
              <p className={pNameSp}>{data.body}</p>
              <img src={data.img1} alt={data.userId} width={data.imgWidth1} height={data.imgHeight1} />
              <img src={data.img2} alt={data.userId} width={data.imgWidth} height={data.imgHeight} />
              <img src={data.img3} alt={data.userId} width={data.imgWidth} height={data.imgHeight} />
              <img src={data.img3} alt={data.userId} width={data.imgWidth} height={data.imgHeight} />
              
             
             
            
            </div>
        ))
     

      )}


       
     
        
        </>
    );
};

export default SecondPage
