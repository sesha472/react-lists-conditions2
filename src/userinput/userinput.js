


import React from 'react';


const Userinput=(props)=>{
    const inputstyle={
        backgroundColor:"hotpink",
        margin:"10px",
        boxShadow:"10px 2px 60px black"
    }
    return <input style={inputstyle} type ="text" onChange={props.chnage} value={props.curentname} />;
}

export default Userinput;