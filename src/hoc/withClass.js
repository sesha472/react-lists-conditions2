import React from 'react';


const withClass =(Wrappedcomponent,className)=>{
return props=>(
    <div className={className}>
    <Wrappedcomponent/>
    </div>
);

};
export default withClass;