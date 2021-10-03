import React, {useState} from "react";

const Document = (props) => { 
    const [disabledButton, setEnabled] = useState(true);

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) { 
            setEnabled(false); 
        };
      };

    return(
        <div className='content'>
            <h1 className='title'>{props.title}</h1>
            <div style={{overflowY:'scroll', height:400, width:800, textAlign:'justify', padding:20}} onScroll={handleScroll}>{props.content}</div>
            <button disabled={disabledButton} style={{margin: 20}}>I agree</button>
        </div>  
    );
  };

export default Document;