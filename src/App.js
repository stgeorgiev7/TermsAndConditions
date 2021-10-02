import "./App.css";
import React, {useState, useEffect}  from "react";
import Document from "./Document";

function App() {
  const [textcontent, setContent]=useState('');

  useEffect(() => {
    fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')
    .then((response) => response.text())
    .then((response) => {setContent(response);});
  }, []);

  const obj = {
    title: 'Terms and conditions',
    content: textcontent
  };

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
          <Document {...obj}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
