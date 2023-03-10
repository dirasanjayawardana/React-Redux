import React, { useEffect } from "react";
import axios from "axios";
import { Reduxtest, Axiostest } from "./components";

function App() {

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('https://powerful-crow.cyclic.app/cards')
        console.log(res)
      }
      catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);


  return (
    <div className="App">
      <Reduxtest />
      <Axiostest />
    </div>
  );
}

export default App;
