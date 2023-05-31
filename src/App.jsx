import { useState } from "react";
import Birthday from "./Birthday";
import data from "./data.js";

import "./App.css";

function App() {
  const [birthday, setBirthday] = useState(data);
  console.log(data);

  return (
    <>
      <div className="main-container">
        <Birthday birthday={birthday} />
        <button onClick={() => setBirthday([])}>Clear All</button>
      </div>
    </>
  );
}

export default App;

// everytime setshowContent update, it would cause rerender and it would rerender the
// newItem filter function once again
