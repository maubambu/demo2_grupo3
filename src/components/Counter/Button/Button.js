import React from 'react';

const Button = (props) => <button onClick={()=>props.click(props.operacion)}>{props.operacion}</button>

export default Button;