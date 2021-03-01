

import React from 'react';

const Validation=(props)=>{
   let textnew=(<p>enter min 10 char</p>)
    if (props.textlength>5){
        textnew=<p>you enter long length</p>
    };

    
    return (
        <div>
            {textnew}
       {/* {(props.textlength <= 5) ?(<p>enter min 10 char</p>): (<p>you enter long length</p>)} */}
        </div>
    );

}

// const Validation =(props)=>{

// let msg="you enterd too long"

// if(props.inputlength<=10){
//     msg="enter max 10";
// }
//     return (<div>
//    {/* { (props.inputlength <= 5) ? (<p>text max 10 char</p>):<p>text is too long</p>} */}
//   <p>{msg}</p>
//    </div>);
// }

export default Validation;