import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CommentsDetail = () => {
    const {id }=useParams();
    const [Comments,setComments] =useState([])
    useEffect (()=>{
       const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
         fetch (url)
         .then (res => res.json())
         .then (data => setComments(data))
         console.log(Comments);

   },[])
    return (
        <div>
            updating
            <h4>{Comments.body}</h4>
        </div>
    );
};

export default CommentsDetail;