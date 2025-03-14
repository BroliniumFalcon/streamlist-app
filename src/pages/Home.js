import React from "react";
import StreamList from "../components/StreamList"; // Import the list component

function Home() {
  return (
    <div>
      <h2>StreamList</h2>
      <p>Add movies or shows you want to watch.</p>
      <StreamList />
    </div>
  );
}

export default Home;
