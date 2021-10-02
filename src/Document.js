import React, {useState} from "react";

const Document = (props) => { 
    const [button, setButton] = useState(true);

    const handleScroll = (e) => {
       const btn=e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
       if (btn){
           setButton(btn);
           console.log('kwo stawa');
       };
    };
    return(
        <div className='container' style={{overflow:'scroll'}}>
            <h1 className='title'>{props.title}</h1>
            <div style={{textOverflow:'ellipsis'}} onScroll={handleScroll}>{props.content}</div>
            <button disabled={true}>I agree</button>
        </div>  
    );
  };

export default Document;