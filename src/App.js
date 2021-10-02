import "./App.css";
import React, {useState, useEffect}  from "react";
import Document from "./Document";

function App() {
  const [content, setContent]=useState('');

  useEffect(() => {
    fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')
    .then((result) => result.text())
    .then((result) => {setContent(result);});
  }, []);

  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <p className="title">A React Task</p>
          <p className="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div className="container is-fullhd">
        <div className="notification">
          <Document title={'Terms and Conditions'} content={content}/>
        </div>
      </div>
    </div>
  );
}

export default App;
