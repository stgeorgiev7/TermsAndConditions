import React, {useState} from "react";

const Document = (props) => { 
    const [disabledButton, setEnabled] = useState(true);

    const enable = () => {
        const scrolled = document.documentElement.scrollTop;
        console.log(scrolled);
        if (scrolled <= 0) {
            setEnabled(true);
        } else {
            setEnabled(false);
        };
    };

    return(
        <div className='content'>
            <h1 className='title'>{props.title}</h1>
            <div style={{overflowY:'scroll', height:400, width:800, textAlign:'justify', padding:20}} onScroll={enable}>{props.content}</div>
            <button disabled={disabledButton} style={{margin: 20}}>I agree</button>
        </div>  
    );
  };

export default Document;