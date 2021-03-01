



import React from 'react';
 const charstyle={
display:"inline-block",

padding:"16px",
backgroundColor:"green",
margin:"20px",
textAlign:"center",
border:"2px solid black",


 }
const Charcomponet=(props)=>{

    return (<div style={charstyle} onClick={props.clickchar} >
                        {props.charlist}
              </div>);

}
export default Charcomponet;