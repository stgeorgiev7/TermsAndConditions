import React, {useState} from "react";

const Document = (props) => { 
    const [disabledButton, setEnabled] = useState(true);

    const enable = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 0) {
            setEnabled(true);
        } else if (scrolled <= 0){
            setEnabled(false);
        };
    };

    const scrolltoBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'auto'
        });
    };

    window.addEventListener('scroll', enable);
    return(
        <div className='content' onScroll={scrolltoBottom}>
            <h1 className='title'>{props.title}</h1>
            <div style={{overflowY:'auto', width: 900}}>{props.content}</div>
            <button disabled={disabledButton}>I agree</button>
        </div>  
    );
  };

export default Document;