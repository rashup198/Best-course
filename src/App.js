import React, { useEffect, useState } from "react";
import {apiUrl, filterData} from "./data";
import Navbar from './components/Navbar'
import Filter from "./components/Filter";
import Cards from './components/Cards'
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
function App () {

  const[courses,setCourses]=useState(null);
  const[loading, setLoading]= useState(true);


 async function fetchData(){
  setLoading(true);
        try {
        const response= await fetch(apiUrl);
        const output = await response.json();

        //save data into a variable
        setCourses(output);
        console.log("courses value");
        console.log(courses);
      } catch (error) {
        toast.error("something went wrong")
      }
      setLoading(false);
    }
    


  useEffect(()=>{
    fetchData();
  },[]);


  return(
    <div>
    <div>
      <Navbar></Navbar>
    </div>
    <div>
      <Filter filterData={filterData}></Filter>
    </div>

    <div>
      {
        loading?(<Spinner></Spinner>) : (<Cards courses={courses}></Cards>)
      }
      
    </div>    

    </div>
  );
}

export default App;
