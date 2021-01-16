import React, { useEffect, useState } from 'react';
import Status from '../Status/Status';



const Home = () => {
    

    const [Comment,setComment] =useState([])
     useEffect (()=>{
        const url = `https://jsonplaceholder.typicode.com/posts`
          fetch (url)
          .then (res => res.json())
          .then (data => setComment(data))
          console.log(Comment);

    },[])


    return (
        <div>
            
            {
                Comment.map(comments => <Status comments={comments} ></Status>)
            }
            
        </div>
    );
};

export default Home;