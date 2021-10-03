import "./App.css";
import React, {useState, useEffect}  from "react";
import Document from "./Document";

function App() {
  const [content, setContent]=useState('');

  useEffect(() => {
    fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')
    .then((response) => response.text())
    .then((response) => {setContent(response);});
  }, []);

  const title = 'Terms and Conditions';

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
          <Document title={title} content={content}/>
        </div>
      </div>
    </div>
  );
}

export default App;
