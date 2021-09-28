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

    
   

    return (
        <>
              {loading ? (
        <div>Loading data...</div>
      ) : (
        data.map((data) => (
            <div className="content" key={data.id} >

              <div className="one">{data.title}</div>
              <div className="two"> {data.body}</div>
             
              <div className="three">
              <img clasName="" src={data.img2} alt={data.userId} width={data.imgWidth2} height={data.imgHeight2} />

              </div>
             <div className="nested">
                <div>
                  <img className="img1" src={data.img1} alt={data.userId} width={data.imgWidth1} height={data.imgHeight1} 
             />
             <p>{data.title}</p>
             </div> 
             <div>
             <img className="2" src={data.img1} alt={data.userId} width={data.imgWidth1} height={data.imgHeight1} 
             /><p>{data.title}</p>
             </div>
             <div className="hide">
             <img className="3" src={data.img1} alt={data.userId} width={data.imgWidth1} height={data.imgHeight1} 
             /><p>{data.title}</p></div></div>
             



            </div>
        ))


      )}





        </>
    );
};

export default SecondPage
