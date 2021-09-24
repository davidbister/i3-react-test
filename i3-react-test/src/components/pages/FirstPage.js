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
            <div key={data.id}>
              <h3>{data.title}</h3>
              <p>{data.body}</p>
              <img src={data.img} alt={data.userId} width={data.imgWidth} height={data.imgHeight} />
            </div>
        ))
      )}
        
    </div>
    );
};

export default FirstPage
