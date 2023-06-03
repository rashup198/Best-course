import React, { useEffect, useState } from "react";
import {apiUrl, filterData} from "./data";
import Navbar from './components/Navbar'
import Filter from "./components/Filter";
import Cards from './components/Cards'
import { toast } from "react-toastify";

function App () {

  const [curses, setCourses] = useState()
  useEffect(()=>{
    const fetchData=  async()=>{
      try {
        const res= await fetch(apiUrl);
        const data = await res.json();

        //save data into a variable
        console.log(data);
      } catch (error) {
        toast.error("something went wrong")
      }
    }
    fetchData();
  },[])


  return(
    <div>
      <Navbar></Navbar>

      <Filter filterData={filterData}></Filter>

      <Cards></Cards>
    </div>
  );
};

export default App;
