import React from "react";
import Card from "./Card";
import Header from "./Header";
import emda from "../emojipedia.js";

function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">
        {emda.map((e) => {
          return (
            <Card key={e.id} emoji={e.emoji} name={e.name} desc={e.meaning} />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
