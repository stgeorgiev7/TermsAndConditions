import React from "react";

const Document = (props) => { 

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) { 
            document.querySelector('.agree').removeAttribute('disabled');
        };
      };

    return(
        <div className='content' >
            <h1 className='title'>{props.title}</h1>
            <div style={{overflowY:'scroll', height:400, width:800, textAlign:'justify', padding:20}} onScroll={handleScroll}>{props.content}</div>
            <button className='agree' disabled style={{margin: 20}}>I agree</button>
        </div>  
    );
  };

export default Document;