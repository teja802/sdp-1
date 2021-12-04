import React, {useState} from "react"; 
import Welcome from "./Welcome";
import "./App.css";

function App() {
  const [active, setActive] =useState(false);

  return (
     <header>
       <button id="menuToggle" onClick={()=>setActive(!active)}> 
       {active? "X": "Menu"}
</button>
<nav className={active ? "nav active" : "nav"}>
<ul>
<li>
<a href="#">About</a>

</li> <li>

<a href="#">Contact</a>

</li> 
</ul> 
</nav>    

    <div className="App">
      <Welcome />
     
    </div>

  </header>
     
  );
}

export default App;