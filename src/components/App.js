import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import AricleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <aside className="App aside" />
      <main className="App main" /> 
    </div>
  );
}

export default App;
