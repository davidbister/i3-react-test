//rfce
import React,{useRef} from 'react';

import './FirstPage.scss'
import { useFetch } from '../useFetch';

const FirstPage=() => {
    const isComponentMounted = useRef(true);

    const { data, loading, error } = useFetch(
      "http://localhost:8000/data",
      isComponentMounted,
      []
    );
    
      return (
        <div>
            
            {loading ? (
        <div>Loading data...</div>
      ) : (
        data.map((data) => (
            <div className="content" key={data.id}>
            
              <img src={data.img1} alt={data.userId} width={data.imgWidth3} height={data.imgHeight3} />
              <img src={data.img1} alt={data.userId} width={data.imgWidth3} height={data.imgHeight3} />
              <img src={data.img1} alt={data.userId} width={data.imgWidth3} height={data.imgHeight3} />
            </div>
        ))
      )}
        
    </div>
    );
};

export default FirstPage
