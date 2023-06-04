import React, { useEffect, useState } from "react";
import {apiUrl, filterData} from "./data";
import Navbar from './components/Navbar'
import Filter from "./components/Filter";
import Cards from './components/Cards'
import { ToastContainer,toast } from "react-toastify";
import Spinner from "./components/Spinner";
import 'react-toastify/dist/ReactToastify.css';
function App () {

  const[courses,setCourses]=useState([]);
  const[loading, setLoading]= useState(true);
  const[category, setCategory] =useState(filterData[0].title);


 async function fetchData(){
  setLoading(true);
        try {
        const response= await fetch(apiUrl);
        const output = await response.json();

        //save data into a variable
        setCourses(output.data);
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
    <div  className="min-h-screen flex flex-col ">
    <div>
      <Navbar></Navbar>
    </div>

    <div className="bg-bgDark2">
    <div>
      <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
    </div>
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
        loading?(<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
      }
      
    </div>    

    </div>


    </div>
  );
}

export default App;
