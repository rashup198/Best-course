import React, { useEffect, useState } from "react";
import {apiUrl, filterData} from "./data";
import Navbar from './components/Navbar'
import Filter from "./components/Filter";
import Cards from './components/Cards'
import { toast } from "react-toastify";

function App () {

  const [courses, setCourses] = useState(null)
  useEffect(()=>{
    const fetchData=  async()=>{
      try {
        const res= await fetch(apiUrl);
        const output = await res.json();

        //save data into a variable
        setCourses(output.data);
        console.log("courses value");
        console.log(courses);
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

      <Cards courses={courses}></Cards>
    </div>
  );
};

export default App;
