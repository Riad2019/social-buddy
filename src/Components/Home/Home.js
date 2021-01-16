import React, { useEffect, useState } from 'react';
import Status from '../Status/Status';



const Home = () => {
    

    const [Post,setPost] =useState([])
     useEffect (()=>{
        const url = `https://jsonplaceholder.typicode.com/posts`
          fetch (url)
          .then (res => res.json())
          .then (data => setPost(data))
         // console.log(Comment);

    },[])


    return (
        <div>
            <h4>Post : {Post.length}</h4>
            {
                Post.map(Post => <Status Post={Post} ></Status>)
            }
            
        </div>
    );
};

export default Home;