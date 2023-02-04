import {useEffect, useState} from "react";
import axios from "axios";
function App() {
  const [testing,SetTesting]=useState("");
  useEffect(()=>{
    axios.get("https://5000-amitpareshmond-blogmern-lbp0i71ktde.ws-us85.gitpod.io/").then(
      (res)=>{
        SetTesting(res.data);
      }
    )
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div className="App">
      this {testing}
    </div>
  );
}

export default App;
