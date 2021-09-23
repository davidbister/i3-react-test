//rfce
import React,{useState,useEffect} from 'react'
import '../../App.scss';

import axios from 'axios';

//I need to imporve this part of code,i will make custom hook :)
function FirstPage() {
    const[post,setPosts]=useState([]);

    useEffect(()=>{
axios.get('http://localhost:8000/data').then(res=>{
    console.log(res)
    setPosts(res.data)
})
.catch(err=>{
    console.log(err)
})
    },[])
    //
    
    return (
        <div>
            
        <ul>
            {post.map(post=>(
                <li key={post.id}>{post.title} <img src={post.pic}alt={post.userId} width={200} height={200} /></li>
               

            ))}
        </ul>
        
    </div>
    );
}

export default FirstPage
