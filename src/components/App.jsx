import React from "react";
import '../App.css';
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import notes from "../notes";


function App() {
  return ( 
    <div>
    <Header / > 

    <CreateArea />
    
    <Footer / >
    </div>

  );
}

export default App;