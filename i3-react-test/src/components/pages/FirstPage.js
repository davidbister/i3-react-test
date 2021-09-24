//rfce
import React,{useRef} from 'react';
import '../../App.scss';
import { useFetch } from '../useFetch';

const FirstPage=() => {
    const isComponentMounted = useRef(true);

    const { data, loading, error } = useFetch(
      "http://localhost:8000/data",
      isComponentMounted,
      []
    );
    
    const imgWidth=200;

    const imgHeight=200;
    
    return (
        <div>
            
            {loading ? (
        <div>Loading data...</div>
      ) : (
        data.map((data) => (
            <div key={data.id}>
              <h3>{data.title}</h3>
              <p>{data.body}</p>
              <img src={data.pic} alt={data.userId} width={imgWidth} height={imgHeight} />
            </div>
        ))
      )}
        
    </div>
    );
};

export default FirstPage
