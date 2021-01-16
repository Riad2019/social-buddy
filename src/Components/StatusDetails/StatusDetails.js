import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentsDetail from '../Comments/CommentsDetail';



const StatusDetails = () => {
     const {id }=useParams();


    const [Post,setPost] =useState([])
     useEffect (()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
          fetch (url)
          .then (res => res.json())
          .then (data => setPost(data))
         // console.log(Post);

    },[])

   

    return (
        <div>
            
            <div className="StatusStyle">
            <h4>{Post.body}</h4>
            </div>
             <div className="CommentStyle">
                <CommentsDetail></CommentsDetail>
                 
             </div>
            
        </div>
    );
};

export default StatusDetails;