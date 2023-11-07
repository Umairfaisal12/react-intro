import { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";


  const HomePage = () => {

    // page eka load weddima run wenna oni ewa
useEffect(() => {
  document.title = "Homepage";
},
[])
    return(
      <div> <NavBar/>
      <h1>Hello World</h1>
      </div>
    );
    } 
    export default HomePage; 