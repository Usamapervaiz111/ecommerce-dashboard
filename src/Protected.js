import React, {useEffect } from 'react';
import { useHistory } from 'react-router';
function Protected(props) {

    const redirect=useHistory();

    let Cmp=props.cmp
useEffect(()=>{
    if(!localStorage.getItem('User-details:')){
        redirect.push('/Register')
    }
},)

return(
    <div>
     <Cmp/>
    </div>
)
}

export default Protected;