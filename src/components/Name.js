import React from 'react';

const Name = (props) => {
    const {name,heroName} = props
    console.log(props)
return  (<div>
<h1> Hello {name} {heroName}</h1>
{props.children}
</div>
);
    
};

export default Name;