/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostsPage from "./components/PostsContainer/PostsPage.js";
// import SearchBar from "./components/SearchBar/SearchBarContainer"
// import dummydata
import dummyData from "./dummy-data.js"
import SearchBar from "./components/SearchBar/SearchBarContainer";

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const data = dummyData;

  return (
    <div className="App">
      <SearchBar />
      <PostsPage  data={data} />
    </div>
  );
};

export default App;
