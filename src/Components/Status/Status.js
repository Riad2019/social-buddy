import React from 'react';
import StatusDetails from '../StatusDetails/StatusDetails';
import './Status.css'
import { Link } from 'react-router-dom';




const Status = (props) => {
    
    //console.log(props)
     const { id , title ,body} = props.Post;
   
     



    return (
           <div className="StatusStyle">
                    

     
     <Link to={`/statusDetail/${id}`}>
     <h4>{title}</h4> 
     </Link>
       
           </div>
         
       

    );
};

export default Status;