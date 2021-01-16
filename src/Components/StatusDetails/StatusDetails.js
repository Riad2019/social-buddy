import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentsDetail from '../Comments/CommentsDetail';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 845,
    },
    media: {
      height: 140,
    },
  });
  


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
    const [Comments,setComments] =useState([])
    useEffect (()=>{
       const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
         fetch (url)
         .then (res => res.json())
         .then (data => setComments(data))
         console.log(Comments);

   },[])
   
   const classes = useStyles();
   



    return (
        <div>
            
            <div className="StatusStyle">
                <h4>{Post.title}</h4>
            <p>{Post.body}</p>
            </div>
             <div  className = "StatusStyle">
             <h4>Total Comments : {Comments.length}</h4>


             <Card style={{ margin: 'auto' }} className={classes.root}>
        <CardActionArea>
          
        </CardActionArea>
        <Typography  color="textSecondary" >
          <h3>All Comments :</h3>



                 {
                   Comments.map(comment => <CommentsDetail comment ={comment}></CommentsDetail>)
                 }
             </Typography>
      </Card>
                 
             </div>
            
        </div>
    );
};

export default StatusDetails;