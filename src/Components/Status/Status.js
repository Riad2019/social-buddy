import React from 'react';
import StatusDetails from '../StatusDetails/StatusDetails';

const Status = (props) => {
    console.log(props)
     const { userId , title } = props.comments;

    return (
        <div>
            <h4>{userId}</h4>
           
        </div>
    );
};

export default Status;