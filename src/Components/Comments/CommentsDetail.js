import React from 'react';



const CommentsDetail = (props) => {
    const { body, email } = props.comment;
   
    return (
        <div>
             
              <h5>{email}</h5> 
              {body}
        </div>
    );
};

export default CommentsDetail;