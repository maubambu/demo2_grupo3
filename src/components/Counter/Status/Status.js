import React from 'react';

const Status = (props) => {
    return (
        <div>
            {props.count > 10 ? <h1>Es mayor a 10</h1> : <h1>Es menor a 10</h1>}
            <p>{props.count}</p>
        </div>
    )
}

export default Status;